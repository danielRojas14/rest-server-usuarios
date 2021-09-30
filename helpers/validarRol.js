const validarRol = (rolesPermitidos = [], Usuario) => {
    return rolesPermitidos.includes(Usuario);
  };
  
  module.exports = {
    validarRol,
  };
  