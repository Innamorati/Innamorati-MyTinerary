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
                    respuesta.json({ success: false, from: "registro", mensaje: "Ya has realizado signUp de esta forma realiza un SingIn" })
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
                            mensaje: "Te enviamos un email para validarlo, por favor verifica tu casilla para completar el signUp y agregarlo a tus metodos de SignIN "
                        })
                    }
                    else {
                        usuarioExiste.save()
                        respuesta.json({
                            success: true,
                            from: "registro",
                            mensaje: "Agregamos " + from + "a tus medios para realizar signIn"
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
                        mensaje: "Felicitaciones se ha creado tu usuario con " + from
                    })

                }
                else {
                    //PASAR EMAIL VERIFICADO A FALSE
                    //ENVIARLE EL E MAIL PARA VERIFICAR
                    await nuevoUsuario.save()
                    await verificacionCorreo(correo, nuevoUsuario.uniqueString) //LLAMA A LA FUNCION ENCARGADA DEL ENVIO DEL CORREO ELECTRONICO

                    respuesta.json({
                        success: true,
                        from: "siggup",
                        mensaje: "Te enviamos un email para validarlo, por favor verifica tu casilla para completar el signUp "
                    }) // AGREGAMOS MENSAJE DE VERIFICACION
                }
                // await nuevoUsuario.save()
            }
        }
        catch (error) {
            console.log(error)
            respuesta.json({ success: false, mensaje: "Algo a salido mal intentalo en unos minutos" })
        }
    },
    inicioDeSecion: async (req, respuesta) => {
        const { correo, contrasena, from } = req.body.datosUsuarios
        try {
            const usuarioExiste = await Usuario.findOne({ correo })
            if (!usuarioExiste) {
                respuesta.json({ success: false, mensaje: "Tu usuario no a sido encontrado por favor registrate" })
            }
            else {
                if (from !== "iniciarSecion") {
                    let contrasenaCoincide = usuarioExiste.contrasena.filter(pass => bcryptjs.compareSync(contrasena, pass))
                    if (contrasenaCoincide.length > 0) {
                        const datosUsuarios = {
                            id: usuarioExiste._id,
                            nombre: usuarioExiste.fullname,
                            apellido: usuarioExiste.apellido,
                            correo: usuarioExiste.correo
                        }
                        await usuarioExiste.save()

                        const token = jwt.sign({ ...datosUsuarios }, process.env.SECRET_KEY, { expiresIn: 60 * 60 * 48 })
                        respuesta.json({
                            success: true,
                            from: from,
                            respuesta: { token, datosUsuarios },
                            mensaje: "Bienvenido nuevamente " + datosUsuarios.nombre + " " + datosUsuarios.apellido
                        })
                    }
                    else {
                        respuesta.json({
                            success: false,
                            from: from,
                            mensaje: "No has realizado el registro con " + from + "si quieres ingresar con este metodo debes hacer el signUp con " + from
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
                                mensaje: "Bienvenido nuevamente " + datosUsuarios.nombre + " " + datosUsuarios.apellido
                            })
                        } else {
                            respuesta.json({
                                success: false,
                                from: from,
                                mensaje: "El usuario o el password no coinciden",
                            })
                        }
                    } else {
                        respuesta.json({
                            success: false,
                            from: from,
                            mensaje: "No has verificado tu email, por favor verifica ti casilla de emails para completar tu signUp"
                        })
                    }

                }
            }
        }
        catch (error) {
            console.log(error);
            respuesta.json({ success: false, mensaje: "Algo a salido mal intentalo en unos minutos" })
        }
    },
    cerrarSecion: async (req, respuesta) => {

        const correo = req.body.cerrarSecion
        const user = await Usuario.findOne({ correo })
        respuesta.json({ success: true, mensaje: "Secion cerrada", })
    },
    verificarToken: (req, res) => {
        console.log(req.user)
        if (!req.err) {
            res.json({
                success: true,
                response: { id: req.user.id, nombre: req.user.nombre, correo: req.user.correo, from: "token" },
                mensaje: "Bienvenido nuevamente " + req.user.nombre
            })
        } else {
            res.json({
                success: false,
                message: "Por favor realiza nuevamente signIn"
            })
        }
    }


}
module.exports = ControladorUsuarios
