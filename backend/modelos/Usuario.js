const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, },
  apellido: { type: String, },
  correo: { type: String, },
  contrasena: [{ type: String, }],
  correoVerificado: { type: Boolean, },
  pais: { type: String },
  imagen: { type: String },
  uniqueString: { type: String, },
  from: { type: Array }
});
const Usuario = mongoose.model("usuarios", usuarioSchema);

module.exports = Usuario;
