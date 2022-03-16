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
            despachar({ type: 'registro', payload: respuesta.data })
            console.log(respuesta.data)
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
                console.log(usuarios)
            } else { console.log(usuarios.data.mensaje) }
        }
    },
    SignOutUser: (closeuser) => {
        return async (dispatch, getState) => {
            const user = axios.post('http://localhost:4000/api/auth/signOut', { closeuser })
            dispatch({ type: 'user', payload: null });
        }
    }
}
export default AccionesUsuarios;