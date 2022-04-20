const Ciudades = require('../modelos/ciudades')

const controladorCiudades = {

    obtenerCiudades: async (req, res) => {
        let ciudades
        let error = null
        try {
            ciudades = await Ciudades.find()
        } catch (err) {
            error = err
            console.log(error)
        }
        res.json({
            respuesta: error ? 'ERROR' : { ciudades },
            estado: error ? false : true,
            error: error
        })
    },
    BorrarCiudad: async (req, res) => {
        const id = req.params.id
        let ciudad
        try {
            await Ciudades.findOneAndDelete({ _id: id })
            ciudad = await Ciudades.find()

        } catch (error) {
            console.log(error)
        }
        res.json({ respuesta: ciudad, success: true })

    },
    cargarCiudad: async (req, res) => {
        const { Ciudad, Pais, Continente, } = req.body.dataInput
        new Ciudades({
            nombre: Ciudad,
            pais: Pais,
            continente: Continente
        }).save()
            .then((respuesta) => res.json({ respuesta }))
    },
    modificarCiudad: async (req, res) => {
        const id = req.params.id
        const ciudad = req.body.dataInput

        let ciudadb = await Ciudades.findOneAndUpdate({ _id: id }, ciudad)

    },
    obtenerUnaCiudad: async (req, res) => {
        const id = req.params.id
        let seleccionada
        let error = null

        try {
            seleccionada = await Ciudades.findOne({ _id: id })

        } catch (err) {
            error = err
            console.log(err)
        }
        res.json({
            respuesta: error ? 'ERROR' : seleccionada,
            success: error ? false : true,
            error: error
        })

    },
}
module.exports = controladorCiudades