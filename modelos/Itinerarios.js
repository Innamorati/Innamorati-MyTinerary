const mongoose = require('mongoose')

const ItinerariosSchema = new mongoose.Schema({
    Actividad: { type: String, require: true },
    FotoUsuario: { type: String, },
    Duracion: { type: String, require: true },
    Like: { type: Array, require: true },
    Precio: { type: Number, require: true },
    Etiquetas: { type: Array, require: true },
    NombreUsuario: { type: String, require: true },
    Ciudad: { type: String },
    Comentarios: [{
        Comentario: { type: String },
        UsuarioId: { type: mongoose.Types.ObjectId, ref: "Usuario" },
        FotoUsuario: { type: String, require: true },
        Itinerario: { type: mongoose.Types.ObjectId, ref: "Itinerarios" }
    }]

})
const Itinerarios = mongoose.model('itinerarios', ItinerariosSchema)

module.exports = Itinerarios