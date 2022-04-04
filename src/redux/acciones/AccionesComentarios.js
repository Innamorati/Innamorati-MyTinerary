import axios from 'axios';

const AccionesComentarios = {

    agregarComentario: (datos) => {

        const token = localStorage.getItem('token')
        return async (despachar, getState) => {
            const respuesta = await axios.post('http://localhost:4000/api/Itinerario/Comentarios/', { datos }, { headers: { 'Authorization': `Bearer ${token}` } })
            console.log(respuesta)
            despachar({ type: 'mensaje', payload: { view: true, mensaje: respuesta.data.mensaje, success: respuesta.data.succes } })
        }
    },
    borrarComentario: (id) => {
        console.log(id)
        const token = localStorage.getItem('token')
        return async (despachar, getState) => {
            const respuesta = await axios.post(`http://localhost:4000/api/Itinerario/Comentarios/${id}`, {}, { headers: { 'Authorization': `Bearer ${token}` } })
            despachar({ type: 'mensaje', payload: { view: true, mensaje: respuesta.data.mensaje, success: respuesta.data.success } })
            return respuesta
            console.log(respuesta)
        }
    }
}
export default AccionesComentarios
// { headers: { 'Authorization': 'Bearer ' + token } }