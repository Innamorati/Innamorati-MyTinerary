import axios from 'axios';

 const AccionesCiudades = {
    
    ObtenerCiudades: () =>{
        return async(despachar, getState) => {
            const respuesta = await axios.get('http://localhost:4000/api/todaslasciudades')
            despachar({type:'fetch', payload:respuesta.data.respuesta.ciudades})
        }
    },
    BorrarCiudad: (id)=>{
        return async(despachar, getState)=>{
            try{
                const respuesta = await axios.delete('http://localhost:4000/api/ciudad/'+id)
                despachar({type:'borrar', payload:respuesta.data.respuesta})
            }
            catch(err){
            console.log(err)
            }
        }
    },
    AgregarCiudad: (Ciudad, Pais, Continente)=>{
        return async(despachar,getState)=>{
            const respuesta = await axios.post('http://localhost:4001/api/productos',{Ciudad, Pais, Continente})
            despachar({type:'AgregarCiudad', payload:respuesta.data.respuesta})
        }
    },
    ObtenerUnaCiudad: (id)=>{
        return async(despachar, getState)=>{
            const respuesta = await axios.get('http://localhost:4000/api/Cities/Detalles/'+id.id)
            console.log(respuesta.data)
            console.log(id.id)
            despachar({type:'ObtenerUnaCiudad', payload:respuesta.data.respuesta})
        }
    }

}
export default AccionesCiudades;