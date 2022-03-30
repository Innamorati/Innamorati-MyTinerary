const Actividades = require('../modelos/Actividades')

const controladoresActividades = {

    obtenerActividades: async (req, respuesta) => {
        let ciudadId = req.params.id
        let actividades
        let error = null
        try {
            actividades = await Actividades.find({ Ciudad: ciudadId })
        }
        catch (err) {
            error = err
            console.log(error)
        }
        respuesta.json({
            respuesta: error ? 'ERROR' : { actividades },
            estado: error ? false : true,
            error: error,
        })
    },
    obtenerTodasLasActividades: async (req, res) => {
        let actividades
        let error = null
        try {
            actividades = await Actividades.find()
        }
        catch (err) {
            error = err
            console.log(error)
        }
        res.json({
            res: error ? 'ERROR' : { actividades },
            estado: error ? false : true,
            error: error,
        })
    },
}
module.exports = controladoresActividades
