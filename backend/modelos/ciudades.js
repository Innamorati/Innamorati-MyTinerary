const mongoose = require('mongoose')

const ciudadesSchema = new mongoose.Schema({
    Ciudad:{type:String, require:true},
    Pais:{type:String, require:true},
    Imagen:{type:String, },
    Description:{type:String, }, 
    Continente:{type:String, require:true} 
})
const Ciudades = mongoose.model('ciudades', ciudadesSchema)

module.exports = Ciudades 