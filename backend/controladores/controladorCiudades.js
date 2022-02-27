const Ciudades = require('../modelos/ciudades')

const controladorCiudades = {
    
    obtenerCiudades: async (req, res)=>{
        let ciudades
        let error = null

        try{
            ciudades = await Ciudades.find()
        }catch(err){
            error = err
            console.log(error)
        }
        res.json({
            respuesta: error ? 'ERROR' : {ciudades},
            estado : error ? false : true,
            error: error 
        })
    }
}
module.exports = controladorCiudades