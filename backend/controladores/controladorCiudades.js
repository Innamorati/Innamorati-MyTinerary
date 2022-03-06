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
    },
    cargarCiudad: async(req,res)=>{
        console.log(req.body)
        const {Ciudad, Pais, Continente,} = req.body.dataInput
        new Ciudades({nombre:Ciudad, 
                     pais:Pais,
                     continente:Continente}).save()
            .then((respuesta) => res.json({respuesta}))
    },
    borrarCiudad: async (req,res)=>{ 
        const id = req.params.id
        

           await Ciudades.findOneAndDelete({_id:id})
           .then((respuesta) => res.json({respuesta}))

    },
    modificarCiudad: async (req, res)=>{
        const id = req.params.id
        const ciudad = req.body.dataInput

        let ciudadb = await Ciudades.findOneAndUpdate({_id:id}, ciudad)
         console.log(ciudadb)

    }
}
module.exports = controladorCiudades