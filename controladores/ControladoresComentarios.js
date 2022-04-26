const Itinerarios = require('../modelos/Itinerarios')

const controladorComentarios = {

    agregarComentario: async (req, res) => {

        const { UsuarioId, Comentario, FotoUsuario, Itinerario } = req.body.datos

        try {
            const nuevoComentario = await Itinerarios.findOneAndUpdate({ _id: Itinerario }, { $push: { Comentarios: { Comentario: Comentario, UsuarioId: UsuarioId, FotoUsuario: FotoUsuario, } } }, { new: true })
            res.json({ succes: true, respuesta: { nuevoComentario }, mensaje: "Comment added successfully" })
        }
        catch (error) {
            console.log(error)
            res.json({ succes: false, mensaje: "Something went wrong try again in a few minutes" })
        }
    },
    borrarComentario: async (req, res) => {

        const id = req.params.id

        try {
            const borrarComentario = await Itinerarios.findOneAndUpdate({ "Comentarios._id": id }, { $pull: { Comentarios: { _id: id } } }, { new: true })
            res.json({ success: true, respuesta: { borrarComentario }, mensaje: "Comment deleted successfully" })
        }
        catch (error) {
            console.log(error)
            res.json({ success: false, mensaje: "Something went wrong try again in a few minutes" })
        }
    },
    modificarComentario: async (req, res) => {
        const { comentarioId, comentario } = req.body.datos
        console.log(comentario)
        try {
            const nuevoComentario = await Itinerarios.findOneAndUpdate({ "Comentarios._id": comentarioId }, { $set: { "Comentarios.$.Comentario": comentario }, }, { new: true })
            res.json({ success: true, view: true, mensaje: "Comment modified successfully" })
        }
        catch (error) {
            console.log(error)
            res.json({ success: false, view: true, mensaje: "Something went wrong try again in a few minutes" })
        }
    }


}
module.exports = controladorComentarios
