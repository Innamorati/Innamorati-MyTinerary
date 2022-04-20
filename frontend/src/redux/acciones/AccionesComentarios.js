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
            console.log(respuesta)
            despachar({ type: 'mensaje', payload: { view: true, mensaje: respuesta.data.mensaje, success: respuesta.data.success } })
            return respuesta
        }
    }
}
export default AccionesComentarios