const Usuario = require('../modelos/Usuario')
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')


const verificacionCorreo = async (correo, uniqueString) => {

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: "mytinerarycheck@gmail.com",
            pass: "240499aI",
        }
    })

    let sender = "mytinerarycheck@gmail.com"
    let correoOpciones = {
        from: sender,
        to: correo,
        subject: "Account verification MyTinerary",
        html: `<h1>Para verificar tu mail presiona <a href=http://localhost:4000/api/Verificacion/${uniqueString}>aqui</a></h1>`
    };
    await transporter.sendMail(correoOpciones, function (error, response) {
        if (error) { console.log(error) }
        else { console.log("mensaje enviado") }
    })

}



const ControladorUsuarios = {

    verificarCorreo: async (req, respuesta) => {
        const { uniqueString } = req.params;

        const usuario = await Usuario.findOne({ uniqueString: uniqueString })
        if (usuario) {
            usuario.correoVerificado = true
            await usuario.save()
            respuesta.redirect("http://localhost:3000")

        }
        else { respuesta.json({ success: false, response: "unverified email " }) }
    },

    cargarUsuarios: async (req, respuesta) => {
        const { nombre, apellido, correo, contrasena, pais, imagen, from } = req.body.datos

        try {
            const usuarioExiste = await Usuario.findOne({ correo })

            if (usuarioExiste) {
                if (usuarioExiste.from.indexOf(from) === 0) {
                    console.log("resultado de if " + (usuarioExiste.from.indexOf(from) === 0))
                    respuesta.json({ success: false, from: "registro", mensaje: "You have already made a signUp in this way make a SingIn " })
                }
                else {
                    const contrasenaHasheada = bcryptjs.hashSync(contrasena, 10)
                    usuarioExiste.from.push(from)
                    usuarioExiste.contrasena.push(contrasenaHasheada)
                    if (from === "registro") {
                        usuarioExiste.uniqueString = crypto.randomBytes(15).toString('hex')
                        await usuarioExiste.save()
                        await verificacionCorreo(correo, usuarioExiste.uniqueString)
                        respuesta.json({
                            success: true,
                            from: "registro",
                            mensaje: "Please verify your mail and then logIn "
                        })
                    }
                    else {
                        usuarioExiste.save()
                        respuesta.json({
                            success: true,
                            from: "registro",
                            mensaje: "We add " + from + "to your means to perform signIn "
                        })
                    }
                }
            }
            else {
                const contrasenaHasheada = bcryptjs.hashSync(contrasena, 10)
                const nuevoUsuario = await new Usuario({
                    uniqueString: crypto.randomBytes(15).toString('hex'),
                    success: true,
                    nombre,
                    apellido,
                    correo,
                    contrasena: [contrasenaHasheada],
                    correoVerificado: false,
                    pais,
                    imagen,
                    from: [from],
                })
                if (from !== "registro") {
                    await nuevoUsuario.save()
                    respuesta.json({
                        success: true,
                        from: "registro",
                        mensaje: "Congratulations, your user has been created with" + from
                    })

                }
                else {
                    await nuevoUsuario.save()
                    await verificacionCorreo(correo, nuevoUsuario.uniqueString) //LLAMA A LA FUNCION ENCARGADA DEL ENVIO DEL CORREO ELECTRONICO

                    respuesta.json({
                        success: true,
                        from: "siggup",
                        mensaje: "Please verify your mail and then logIn "
                    })
                }

            }
        }
        catch (error) {
            console.log(error)
            respuesta.json({ success: false, mensaje: "The email or password is incorrect" })
        }
    },
    inicioDeSecion: async (req, respuesta) => {
        const { correo, contrasena, from, imagen } = req.body.datosUsuarios
        try {
            const usuarioExiste = await Usuario.findOne({ correo })
            if (!usuarioExiste) {
                respuesta.json({ success: false, mensaje: "Your user has not been found please register " })
            }
            else {
                if (from !== "iniciarSecion") {
                    let contrasenaCoincide = usuarioExiste.contrasena.filter(pass => bcryptjs.compareSync(contrasena, pass))
                    if (contrasenaCoincide.length > 0) {
                        const datosUsuarios = {
                            id: usuarioExiste._id,
                            nombre: usuarioExiste.fullname,
                            apellido: usuarioExiste.apellido,
                            correo: usuarioExiste.correo,
                            imagen: usuarioExiste.imagen
                        }
                        await usuarioExiste.save()

                        const token = jwt.sign({ ...datosUsuarios }, process.env.SECRET_KEY, { expiresIn: 60 * 60 * 48 })
                        respuesta.json({
                            success: true,
                            from: from,
                            respuesta: { token, datosUsuarios },
                            mensaje: "Welcome again " + datosUsuarios.nombre + " " + datosUsuarios.apellido
                        })
                    }
                    else {
                        respuesta.json({
                            success: false,
                            from: from,
                            mensaje: "You have not registered with  " + from + "if you want to enter with this method you must do the signUp with  " + from
                        })
                    }
                }
                else {
                    if (usuarioExiste.correoVerificado) {
                        let contrasenaCoincide = usuarioExiste.contrasena.filter(pass => bcryptjs.compareSync(contrasena, pass))
                        if (contrasenaCoincide.length > 0) {
                            const datosUsuarios = {
                                id: usuarioExiste._id,
                                nombre: usuarioExiste.nombre,
                                apellido: usuarioExiste.apellido,
                                correo: usuarioExiste.correo,
                                imagen: usuarioExiste.imagen,
                                from: usuarioExiste.from,
                            }
                            const token = jwt.sign({ ...datosUsuarios }, process.env.SECRET_KEY, { expiresIn: 60 * 60 * 48 })
                            respuesta.json({
                                success: true,
                                from: from,
                                respuesta: { token, datosUsuarios },
                                mensaje: "Welcome again " + datosUsuarios.nombre + " " + datosUsuarios.apellido
                            })
                        } else {
                            respuesta.json({
                                success: false,
                                from: from,
                                mensaje: "The email or password is incorrect ",
                            })
                        }
                    } else {
                        respuesta.json({
                            success: false,
                            from: from,
                            mensaje: "Email not verified, please verify it then log in"
                        })
                    }

                }
            }
        }
        catch (error) {
            console.log(error);
            respuesta.json({ success: false, mensaje: "Something went wrong try again in a few minutes" })
        }
    },
    cerrarSecion: async (req, respuesta) => {
        const correo = req.body.cerrarSecion
        const user = await Usuario.findOne({ correo })
        respuesta.json({ success: true, mensaje: "Closed session", correo: null, contrasena: null })
    },
    verificarToken: (req, res) => {
        if (!req.err) {
            res.json({
                success: true,
                response: { id: req.user.id, nombre: req.user.nombre, correo: req.user.correo, from: "token", imagen: req.user.imagen },
                mensaje: "Welcome again " + req.user.nombre
            })
        } else {
            res.json({
                success: false,
                mensaje: "Por favor realiza nuevamente signIn"
            })
        }
    },
}
module.exports = ControladorUsuarios
