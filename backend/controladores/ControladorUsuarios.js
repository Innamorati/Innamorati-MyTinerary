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
    cargarUsuarios: async (req, respuesta) => {
        const { nombre, apellido, correo, contrasena, pais, from } = req.body.datos
        // new Usuario({ nombre, apellido, correo, contrasena, pais, from }).save()
        try {
            const usuarioExiste = await Usuario.findOne({ correo })

            if (usuarioExiste) {
                console.log(usuarioExiste.from.indexOf(from))
                if (usuarioExiste.from.indexOf(from) === 0) {
                    console.log("resultado de if " + (usuarioExiste.from.indexOf(from) === 0))
                    respuesta.json({ success: false, from: "registro", mensaje: "Ya has realizado signUp de esta forma realiza un SingIn" })
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
                const contrasenaHasheada = bcryptjs.hashSync(contrasena, 15)
                const nuevoUsuario = await new Usuario({
                    success: true,
                    nombre,
                    apellido,
                    correo,
                    contrasena: [contrasenaHasheada],
                    correoVerificado: false,
                    pais,
                    from: [from],
                })
                await nuevoUsuario.save()
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
                            nombre: usuarioExiste.fullname,
                            apellido: usuarioExiste.apellido,
                            correo: usuarioExiste.correo
                        }
                        await usuarioExiste.save()
                        respuesta.json({
                            success: true,
                            from: from,
                            respuesta: { datosUsuarios },
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
                                nombre: usuarioExiste.nombre,
                                apellido: usuarioExiste.apellido,
                                correo: usuarioExiste.correo,
                                from: usuarioExiste.from
                            }

                            respuesta.json({
                                success: true,
                                from: from,
                                respuesta: { datosUsuarios },
                                message: "Bienvenido nuevamente " + datosUsuarios.nombre + " " + datosUsuarios.apellido
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
            respuesta.json({ success: false, message: "Algo a salido mal intentalo en unos minutos" })
        }
    }


}
module.exports = ControladorUsuarios
