const Usuario = require('../modelos/Usuario')
const bcryptjs = require('bcryptjs')


const ControladorUsuarios = {

    obtenerUsuarios: async (req, res) => {
        let usuarios
        let error = null
        try {
            usuarios = await Usuario.find()
        } catch (err) {
            error = err
            console.log(error)
        }
        res.json({
            respuesta: error ? 'ERROR' : { usuarios },
            estado: error ? false : true,
            error: error
        })
    },
    cargarUsuarios: async (req, res) => {
        const { nombre, apellido, correo, contrasena, pais, from } = req.body.datos
        // new Usuario({ nombre, apellido, correo, contrasena, pais, from }).save()
        try {
            const usuarioExiste = await Usuario.findOne({ correo })

            if (usuarioExiste) {
                console.log(usuarioExiste.from.indexOf(from))
                if (usuarioExiste.from.indexOf(from) === 0) {
                    console.log("resultado de if " + (usuarioExiste.from.indexOf(from) === 0))
                    res.json({ success: false, from: "registro", mensaje: "Ya has realizado signUp de esta forma realiza un SingIn" })
                }
                else {
                    const contrasenaHasheada = bcryptjs.hashSync(contrasena, 15)
                    usuarioExiste.from.push(from)
                    usuarioExiste.contrasena.push(contrasenaHasheada)
                    if (from === "registro") {
                        await usuarioExiste.save()
                        respuesta.json({
                            success: true,
                            from: "registro",
                            message: "Te enviamos un email para validarlo, por favor verifica tu casilla para completar el signUp y agregarlo a tus metodos de SignIN "
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
                const contrasenaHasheada = bcryptjs.hashSync(contrasena, 15)
                const nuevoUsuario = await new Usuario({
                    success: true,
                    nombre,
                    apellido,
                    correo,
                    contrasena: [contrasenaHasheada],
                    correoVerificado: true,
                    pais,
                    from: [from],
                })
                await nuevoUsuario.save()
            }
        }
        catch (error) {
            console.log(error)
            res.json({ success: false, message: "Algo a salido mal intentalo en unos minutos" })
        }
    },
    signUpUsuarios: async (req, res) => {
        console.log('hila')
        let { nombre, apellido, correo, contrasena, pais, from } = req.body.datos
        res = datos
        try {

            const usuarioExiste = await Usuario.findOne({ correo })

            if (usuarioExiste) {
                console.log(usuarioExiste.from.indexOf(from))
                if (usuarioExiste.from.indexOf(from) === 0) {
                    console.log("resultado de if " + (usuarioExiste.from.indexOf(from) === 0))
                    res.json({
                        success: false,
                        from: "signup",
                        message: "Ya has realizado tu SignUp de esta forma por favor realiza SignIn"
                    })
                } else {
                    const contrasenaHasheada = bcryptjs.hashSync(password, 10)
                    usuarioExiste.from.push(from)
                    usuarioExiste.contrasena.push(contrasenaHasheada)
                    if (from === "form-Signup") {

                        await usuarioExiste.save()

                        res.json({
                            success: true,
                            from: "signup",
                            message: "Te enviamos un email para validarlo, por favor verifica tu casilla para completar el signUp y agregarlo a tus metodos de SignIN "
                        })

                    } else {
                        usuarioExiste.save()

                        res.json({
                            success: true,
                            from: "signup",
                            message: "Agregamos " + from + " a tus medios para realizar signIn"
                        })
                    }
                }
            } else {


                const contrasenaHasheada = bcryptjs.hashSync(password, 10)
                console.log(contrasenaHasheada)

                const nuevoUsuario = await new Usuario({
                    nombre,
                    apellido,
                    pais,
                    correo,
                    contrasena: [contrasenaHasheada],
                    correoVerificado: true,
                    from: [from],

                })

                if (from !== "form-Signup") {
                    await nuevoUsuario.save()
                    res.json({
                        success: true,
                        from: "signup",
                        message: "Felicitaciones se ha creado tu usuario con " + from
                    })

                } else {

                    await nuevoUsuario.save()

                    res.json({
                        success: true,
                        from: "siggup",
                        message: "Te enviamos un email para validarlo, por favor verifica tu casilla para completar el signUp "
                    })
                }
            }
        } catch (error) {
            console.log(error)
            res.json({ success: false, message: "Algo a salido mal intentalo en unos minutos" })
        }
    },


}
module.exports = ControladorUsuarios
