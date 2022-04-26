import axios from 'axios';

const AccionesComentarios = {

    agregarComentario: (datos) => {
        return async (despachar, getState) => {
            if (datos.Comentario.length > 0) {
                const token = localStorage.getItem('token')
                const respuesta = await axios.post('http://localhost:4000/api/Itinerario/Comentarios/', { datos }, { headers: { 'Authorization': `Bearer ${token}` } })
                despachar({ type: 'mensaje', payload: { view: true, mensaje: respuesta.data.mensaje, success: respuesta.data.succes } })

            }
            else {
                despachar({ type: 'mensaje', payload: { view: true, mensaje: "El comentario no deve estar vacio", success: false } })
            }
        }
    },
    borrarComentario: (id) => {
        const token = localStorage.getItem('token')
        return async (despachar, getState) => {
            const respuesta = await axios.post(`http://localhost:4000/api/Itinerario/Comentarios/${id}`, {}, { headers: { 'Authorization': `Bearer ${token}` } })
            despachar({ type: 'mensaje', payload: { view: true, mensaje: respuesta.data.mensaje, success: respuesta.data.success } })
            return respuesta
        }
    },
    modificarComentario: (datos) => {
        console.log(datos)
        return async (dispatch, getState) => {
            const res = await axios.put('http://localhost:4000/api/Itinerario/BorrarComentario', { datos })
            dispatch({ type: 'mensaje', payload: { view: res.data.view, mensaje: res.data.mensaje, success: res.data.success } })
            return res
        }

    }
}
export default AccionesComentarios