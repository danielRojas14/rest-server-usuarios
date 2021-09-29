const { model, Schema } = require("mongoose");

const UsuarioSchema = new Schema({
  gmail:{type:String, unique:true},
  password: { type: String, required: true},
  estado: { type: Boolean, default: true },
  rol: {type: String, default:'standar'},
});

module.exports = model("usuario", UsuarioSchema);
