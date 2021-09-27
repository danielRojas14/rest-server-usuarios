const { model, Schema } = require("mongoose");

const UsuarioSchema = new Schema({
  nombreUsu: { type: String },
  password: { type: String },
  estado: { type: Boolean, default: true },
});

module.exports = model("Usuario", UsuarioSchema);
