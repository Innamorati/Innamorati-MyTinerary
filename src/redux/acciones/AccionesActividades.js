import axios from 'axios';

const AccionesActividades = {

    obtenerActividades: (id) => {
        return async (despachar, getState) => {
            const respuesta = await axios.get('http://localhost:4000/api/Actividades/' + id)
            despachar({ type: 'actividades', payload: respuesta.data.respuesta.actividades })
        }
    },
    obtenerTodasLasActividades: () => {
        return async (despachar, getState) => {
            const respuesta = await axios.get('http://localhost:4000/api/allActividades')
            despachar({ type: 'todasLasActividades', payload: respuesta.data.respuesta })
        }
    }
}
export default AccionesActividades;