import axios from 'axios'

export const Datos = async ()=>{
    try{
        let data = await axios.get(`http://localhost:4000/api/ciudades`)
        return data
    }
    catch(error){
        throw(error)
    }
}