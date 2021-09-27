const { model, Schema } = require("mongoose");

const UsuarioSchema = new Schema({
  nombreUsu: { type: String, required:true },
  password: { type: String, required: true},
  estado: { type: Boolean, default: true },
  rol: {type: String, required:true},
});

module.exports = model("usuario", UsuarioSchema);
