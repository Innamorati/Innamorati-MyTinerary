import axios from 'axios';

const AccionesItinerarios={
    
  ObtenerItinerarios:()=>{
      return async(despachar, getState)=>{
          const respuesta = await axios.get('http://localhost:4000/api/Itinerarios')
          despachar({type:'todos', payload:respuesta.data.respuesta.itinerarios})
      }
  },
  ObtenerItinerariosPorCiudad:(id)=>{
    return async(despachar, getState)=>{
      const respuesta = await axios.get('http://localhost:4000/api/Itinerarios/'+id)
      despachar({type:'Ciudad', payload: respuesta.data.respuesta.itinerarios})
    }  
  },
  CambiarEstado:(estado)=>{
    return(despachar, getState)=>{
      const respuesta =  estado
      despachar({type:'CambiarEstado', payload: respuesta})
    }
  }
}
export default AccionesItinerarios;