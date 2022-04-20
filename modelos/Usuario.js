const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  correo: { type: String, required: true },
  contrasena: [{ type: String, required: true }],
  correoVerificado: { type: Boolean, required: true },
  pais: { type: String, required: true },
  imagen: { type: String },
  uniqueString: { type: String, },
  from: { type: Array }
});
const Usuario = mongoose.model("usuarios", usuarioSchema);

module.exports = Usuario;
