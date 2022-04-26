const Itinerarios = require('../modelos/Itinerarios')

const controladorItinerarios = {

    ObtenerItinerarios: async (req, res) => {
        let itinerarios
        let error = null
        try {
            itinerarios = await Itinerarios.find()
        } catch (err) {
            error = err
            console.log(error)

        }
        res.json({
            respuesta: error ? 'ERROR' : { itinerarios },
            estado: error ? false : true,
            error: error,
        })
    },
    ObtenerItinerariosPorCiudad: async (req, res) => {
        let ciudad = req.params.ciudad
        let itinerarios
        let error = null
        try {
            itinerarios = await Itinerarios.find({ Ciudad: ciudad })
        } catch (err) {
            error = err
            console.log(error)

        }
        res.json({
            respuesta: error ? 'ERROR' : { itinerarios },
            estado: error ? false : true,
            error: error,
        })
    },
    LikeyDislike: async (req, res) => {
        let id = req.params.id
        let usuario = req.user.id
        await Itinerarios.findOne({ _id: id })
            .then((itinerarios) => {
                if (itinerarios.Like.includes(usuario)) {
                    Itinerarios.findOneAndUpdate({ _id: id }, { $pull: { Like: usuario } }, { new: true })
                        .then((respuesta) => res.json({ success: true, respuesta: respuesta.Like }))
                        .catch((error) => console.log(error))

                } else {
                    Itinerarios.findOneAndUpdate({ _id: id }, { $push: { Like: usuario } }, { new: true })
                        .then((respuesta) => res.json({ success: true, respuesta: respuesta.likes }))
                        .catch((error) => console.log(error))
                }

            })
    }
}
module.exports = controladorItinerarios
