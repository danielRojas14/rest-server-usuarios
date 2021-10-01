
const { validarRol } = require("../helpers/validarRol");

const roles = {};
//se valida el rol del usuario que quiera listar los mismos
roles.validarRolListarUsuarios = (req, res, next) => {
    if (
      !validarRoles(["admin", "standard"], req.Usuario)
    ) {
      return res.status(401).json("No posee los permisos necesarios");
    }
    next();
  };

// Validar roles para la ruta de crear un usuario
roles.validarRolCrearUsuario = (req, res, next) => {
    if (!validarRol(["admin"], req.Usuario)) {
      console.log(req.Usuario);
      return res.status(401).json("No posee los permisos necesarios");
    }

    
    next();
  };
  
  // Validar roles para la ruta de actualizar un usuario
  roles.validarRolActualUsuario = (req, res, next) => {
    if (!validarRol(["admin"], req.Usuario)) {
      return res.status(401).json("No posee los permisos necesarios");
    }
    next();

  };
  
  // Validar roles para la ruta de borrar un usuario
  roles.validarRolBorrarUsuario = (req, res, next) => {
    if (!validarRol(["admin"], req.Usuario)) {
      return res.status(401).json("No posee los permisos necesarios");
    }
    next();
  
  };
  module.exports = roles;
  