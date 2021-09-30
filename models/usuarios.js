const { model, Schema } = require("mongoose");

const UsuarioSchema = new Schema({
  gmail:{type:String, unique:true},
  password: { type: String, required: true},
  estado: { type: Boolean, default: true },
  rol: {type: String, default:'standar'},
});

UsuarioSchema.methods.toJSON = function () {
  const { password, _id, __v, ...usuario } = this.toObject();
  usuario.uid = _id;
  return usuario;
};

module.exports = model("usuario", UsuarioSchema);
