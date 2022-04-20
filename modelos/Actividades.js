const mongoose = require("mongoose");

const actividadesSchema = new mongoose.Schema({
    Imagen: { type: String, require: true },
    Titulo: { type: String, require: true },
    Ciudad: { type: mongoose.Types.ObjectId, ref: "ciudades" },
    Itinerario: { type: mongoose.Types.ObjectId, ref: "Itinerarios" },
});

const Actividades = mongoose.model("actividades", actividadesSchema);
module.exports = Actividades;