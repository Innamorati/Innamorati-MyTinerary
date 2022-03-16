import axios from 'axios';

const AccionesUsuarios = {

    signUpUsuarios: (datos) => {
        return async (despachar, getState) => {

            const res = await axios.post('http://localhost:4000/api/Autenticaion/SingUp', { datos })
            despachar({ type: 'registro', payload: { view: true, message: res.data.message, success: res.data.success } });
            console.log(res.data)

        }
    },
    cargarUsuarios: (datos) => {
        return async (despachar, getState) => {
            const respuesta = await axios.post('http://localhost:4000/api/cargar', { datos })
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
    signInUser: (logedUser) => {

        return async (dispatch, getState) => {
            const user = await axios.post('http://localhost:4001/api/auth/signIn', { logedUser })
            if (user.data.success) {
                dispatch({ type: 'user', payload: user.data.response.userData });

            }
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: user.data.message,
                    success: user.data.success
                }
            });
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