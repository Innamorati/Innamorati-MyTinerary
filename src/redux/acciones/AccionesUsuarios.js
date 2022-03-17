import axios from 'axios';

const AccionesUsuarios = {

    // signUpUsuarios: (datos) => {
    //     return async (despachar, getState) => {

    //         const res = await axios.post('http://localhost:4000/api/Autenticaion/SingUp', { datos })
    //         despachar({ type: 'registro', payload: { view: true, message: res.data.message, success: res.data.success } });
    //         console.log(res.data)

    //     }
    // },
    cargarUsuarios: (datos) => {
        return async (despachar, getState) => {
            const respuesta = await axios.post('http://localhost:4000/api/Autenticacion/Registro', { datos })
            console.log(datos)
            despachar({ type: 'mensaje', payload: { seccess: respuesta.data.success, mensaje: respuesta.data.mensaje, view: true } })
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
                despachar({ type: 'iniciarSecion', payload: usuarios.data.respuesta.datosUsuarios });
                despachar({ type: 'mensaje', payload: usuarios.data.mensaje });
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
            despachar({ type: 'iniciarSecion', payload: null });
            despachar({ type: 'mensaje', payload: { mensaje: usuarios.data.mensaje, view: true } });
            console.log(usuarios)
        }
    },

}
export default AccionesUsuarios;