const mongoose = require('mongoose')

const ItinerariosSchema = new mongoose.Schema({
    Actividad:{type:String, require:true},
    FotoUsuario:{type:String, },
    Duracion:{type:String, require:true},
    Like:{type:String, require:true},
    Precio:{type:Number, require:true},
    Etiquetas:{type:String, require:true},
    NombreUsuario:{type:String, require:true},
    Ciudad:{type:String, require:true},
})
const Itinerarios = mongoose.model('itinerarios', ItinerariosSchema)

module.exports = Itinerarios