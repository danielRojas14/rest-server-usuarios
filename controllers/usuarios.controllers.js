const ctrlHome = {};
// const { findById, findByIdAndUpdate, findByIdAndDelete } = require('../models/notas');
const usuario = require("../models/usuarios");

// Devuelve todos los usuarios de la colección
ctrlHome.rutaGet = async (req, res) => {
  const usuarios = await usuario.find({ estado: true }); // consulta para todos los documentos

  // Respuesta del servidor
  res.json(usuarios);
};

// Controlador que almacena un nuevo usuario
ctrlHome.rutaPost = async (req, res) => {
  const {} = req.body;
  const usuarioInsert = new nota({ estado: true });
  await usuarioInsert.save();

  res.json({ msg: "Usuario creado correctamente" });
};

// Controlador que actualiza información de los usuarios
ctrlHome.rutaPut = async (req, res) => {
  const {} = req.body;

  const usuarios = await usuario.findByIdAndUpdate(
    id,
    { titulo, descripcion },
    { new: true }
  );

  res.json({
    msg: "usuario actualizado correctamente",
    usuarios,
  });
};

ctrlHome.deleteUsuario = async (req, res) => {
  console.log("req.params");
  const { id } = req.body;
  const usuarios = await usuario.findByIdAndUpdate(
    id,
    { estado: false },
    { new: true }
  );

  // Respuesta del servidor
  res.json({
    msg: "Usuario eliminado correctamente",
    usuarios,
  });
};

module.exports = ctrlHome;
