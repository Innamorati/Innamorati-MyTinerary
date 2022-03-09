const Itinerarios = require('../modelos/Itinerarios')

const controladorItinerarios = {
    
    ObtenerItinerarios: async (req, res)=>{
        let itinerarios
        let error = null
        try{
            itinerarios = await Itinerarios.find()
        }catch(err){
            error = err
            console.log(error)
            
        }
        res.json({
            respuesta: error ? 'ERROR' : {itinerarios},
            estado : error ? false : true,
            error: error,
        })
    },
    ObtenerItinerariosPorCiudad: async (req, res)=>{
        let ciudad = req.params.ciudad
        console.log(req.params.ciudad)
        let itinerarios
        let error = null
        try{
            itinerarios = await Itinerarios.find({Ciudad:ciudad})
        }catch(err){
            error = err
            console.log(error)
            
        }
        res.json({
            respuesta: error ? 'ERROR' : {itinerarios},
            estado : error ? false : true,
            error: error,
        })
    },
}
module.exports = controladorItinerarios
