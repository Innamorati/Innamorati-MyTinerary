import axios from 'axios';

const AccionesUsuarios = {

    cargarUsuarios: (datos) => {
        return async (despachar, getState) => {
            const respuesta = await axios.post('http://localhost:4000/api/Autenticacion/Registro', { datos })
            despachar({ type: 'mensaje', payload: { seccess: respuesta.data.success, mensaje: respuesta.data.mensaje, view: true } })
            console.log(respuesta)
        }
    },
    obtenerUsuarios: () => {
        return async (despachar, getState) => {
            const respuesta = await axios.get('http://localhost:4000/api/Autenticacion/Usuarios')
            despachar({ type: 'obtenerUsuarios', payload: respuesta.data.respuesta })
        }
    },

    iniciarSecion: (datosUsuarios) => {
        return async (despachar, getState) => {
            const usuarios = await axios.post('http://localhost:4000/api/ini', { datosUsuarios })
            if (usuarios.data.success) {
                localStorage.setItem('token', usuarios.data.respuesta.token)
                despachar({ type: 'iniciarSecion', payload: usuarios.data.respuesta.datosUsuarios });
                despachar({ type: 'mensaje', payload: usuarios.data.mensaje });
                console.log(usuarios.data.respuesta.datosUsuarios)
            }
            despachar({
                type: 'mensaje',
                payload: { success: usuarios.data.success, mensaje: usuarios.data.mensaje, view: true }
            });
            // console.log(usuarios)
        }
    },
    cerrarSecion: (correo) => {
        return async (despachar, getState) => {
            const usuarios = await axios.post('http://localhost:4000/api/Autenticaion/CerrarSecion', { correo })
            localStorage.removeItem('token')
            despachar({ type: 'iniciarSecion', payload: null });
            despachar({ type: 'mensaje', payload: { succes: usuarios.data.success, mensaje: usuarios.data.mensaje, view: true } });

        }
    },
    VerificarToken: (token) => {

        return async (despachar, getState) => {
            const usuario = await axios.get('http://localhost:4000/api/auth/signInToken', { headers: { 'Authorization': 'Bearer ' + token } })
            if (usuario.data.success) {
                despachar({ type: 'iniciarSecion', payload: usuario.data.response });
                despachar({ type: 'mensaje', payload: { view: true, mensaje: usuario.data.mensaje, success: usuario.data.success } });
            } else { localStorage.removeItem('token') }

        }
    },

    obtenerPaises: (tokenAutenticacion) => {
        return async (despachar, getState) => {
            const pais = await axios.get("https://restcountries.com/v3.1/all", {
                headers: {
                    'Authorization': 'Bearer ' + tokenAutenticacion,
                    "Accept": "application/json"
                },
            })

            despachar({
                type: 'paises', payload: pais
            })


        }

    }
}
export default AccionesUsuarios;