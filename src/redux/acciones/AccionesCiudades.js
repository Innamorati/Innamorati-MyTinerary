import axios from 'axios';

 const AccionesCiudades = {
    
    ObtenerCiudades: () =>{
        return async(despachar, getState) => {
            const res = await axios.get('http://localhost:4000/api/todaslasciudades')
            despachar({type:'fetch', cargar:res.data.respuesta})
        }
    }


}
export default AccionesCiudades;