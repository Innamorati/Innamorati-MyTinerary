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
export const  cargarDatos = async (ingresoDatos) => {
    
    try {
        let data = await axios.post(`http://localhost:4000/api/ciudades`,{})
        return data
    }
    catch (error) {
        throw error
    }
}
export const  eliminarCiudad = async (id) => {
    try {
        let data = await axios.delete(`http://localhost:4000/api/V1/allcities/`)
        return data
    }
    catch (error) {
        throw error
    }
}
export const  modificarCiudad = async (id,dataInput) => {
    console.log(id, dataInput)
    try {
        let data = await axios.put(`http://localhost:4000/api/ciudades/`,{})
        return data
    }
    catch (error) {
        throw error
    }
}