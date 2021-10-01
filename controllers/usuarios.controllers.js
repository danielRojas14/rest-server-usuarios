const ctrlHome = {};
const bcryptjs = require('bcryptjs');
const usuario = require("../models/usuarios");

// Devuelve todos los usuarios de la colección
ctrlHome.rutaGet = async (req, res) => {

  try{
  const usuarios = await usuario.find({ estado: true }); // consulta para todos los documentos

  // Respuesta del servidor
  res.status(200).json({usuarios});
}catch(err){
  res.status(401).json({ msg: "ocurrio un error al listar a los usuarios", err });
}
}
// Controlador que almacena un nuevo usuario
ctrlHome.rutaPost = async (req, res) => {
  const {gmail, password, rol} = req.body;
  
  try{

  const usuarioInsert = new usuario({
    gmail,
    password,
    rol,})

    const salt = bcryptjs.genSaltSync();

    usuarioInsert.password = bcryptjs.hashSync(password, salt);


  await usuarioInsert.save();
  res.status(200).json({ 
    msg: "Usuario creado correctamente" });
}catch(err){
  res.status(401).json({ 
    msg: "ocurrio un error al al crear un usuario", err });
}
}

// Controlador que actualiza información de los usuarios
ctrlHome.rutaPut = async (req, res) => {

  const {id} = req.params;
  const {gmail,password, rol} = req.body;
// console.log(datos);
  try{

    if (password) {
      const salt = bcryptjs.genSaltSync();
      passwordBcrypt = bcryptjs.hashSync(password, salt)
    }

  const usuariosModificar = await usuario.findByIdAndUpdate(id, {
    gmail,
  password: passwordBcrypt,
    rol,
    
   },{ new: true });

  res.status(200).json({
    msg: "usuario actualizado correctamente",
    usuariosModificar,
  });
}catch(err){
  
  res.status(401).json({ msg: "ocurrio un error al modificar el usuario", err });
}
}

ctrlHome.deleteUsuario = async (req, res) => {
  try{

  const { id } = req.params;

  const usuarios = await usuario.findByIdAndUpdate(
    id,
    { estado: false },{new:true}
  );

  // Respuesta del servidor
  return res.status(200).json({
    msg: "Usuario eliminado correctamente",
    usuarios,
  });
}catch(err){
return res.status(401).json({
  msg:'Ocurrio un error al cambiar el estado del usuario',
  usuarios
})
}
}


module.exports = ctrlHome;
