import axios from 'axios';

const AccionesItinerarios = {

  ObtenerItinerarios: () => {
    return async (despachar, getState) => {
      const respuesta = await axios.get('http://localhost:4000/api/Itinerarios')
      despachar({ type: 'todos', payload: respuesta.data.respuesta.itinerarios })
    }
  },
  ObtenerItinerariosPorCiudad: (id) => {
    return async (despachar, getState) => {
      const respuesta = await axios.get('http://localhost:4000/api/Itinerarios/' + id)
      despachar({ type: 'Ciudad', payload: respuesta.data.respuesta.itinerarios })
    }
  },
  CambiarEstado: (estado) => {
    return (despachar, getState) => {
      const respuesta = estado
      despachar({ type: 'CambiarEstado', payload: respuesta })
    }
  },
  VisibilidadAvisoItinerarios: (longitud) => {
    return (despachar, getState) => {
      despachar({ type: 'VisivilidadAlertaItinerarios', payload: longitud })
    }
  },
  LikeyDislike: (itinerarioID) => {
    const token = localStorage.getItem('token')

    return async () => {
      try {
        let respuesta = await axios.put(`http://localhost:4000/api/Itinerario/LikeyDislike/${itinerarioID}`, {},
          {
            headers: {
              Authorization: "Bearer " + token
            }
          })

        return respuesta

      } catch (error) {
        console.log(error)
      }
    }
  },
  Recargar: (reload) => {
    return (despachar, getState) => {
      despachar({ type: 'Actualizar', payload: reload })
    }
  }
}
export default AccionesItinerarios;