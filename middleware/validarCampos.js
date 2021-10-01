
const { check, validationResult } = require("express-validator");
const {esActivo, existeUsuario, existeEmail} = require('../helpers/validacionExiste')

const validarCampos = {};

// Se retorna los campos a validar para la ruta de obtener un usuario
validarCampos.validacionesCamposObtenerUnUsuario = () => {
  return [
    check("id", "El id enviado no tiene un formato valido")
      .isMongoId()
      .trim()
      .escape(),
  ];
};

//Se retorna los campos a validar para la ruta de crear un usuario
validarCampos.validacionesCamposCrearUsuario = () => {
  return [
    check("gmail", "El  formato del email es incorrecto")
      .isEmail()
      .trim()
      .escape()
    .custom(existeEmail),
    check("password", "El formato del password incorrecto")
      .trim()
      .escape()
      .isLength({ min: 8 }),
    
  ];
};

// Se retorna los campos a validar para la ruta de actualizar un usuario
validarCampos.validacionesCamposActualUsuario = () => {
  return [
    check("gmail", "El email enviado tiene un formato incorrecto")
      .isEmail()
      .trim()
      .escape(),
    check("password", "El password enviado tiene un formato incorrecto")
      .trim()
      .escape()
      .isLength({ min: 8 }),

    check("id", "El id enviado no tiene un formato valido")
      .isMongoId()
      .trim()
      .escape()
      .custom(existeUsuario),
  ];
};

// Se retorna los campos a validar para la ruta de cambiar estado de usuarios
validarCampos.validacionesCamposBorrarUsuario = () => {
  return [
    check(
      "activo",
      "Error invalido para el estado, solo puede enviar true o false"
    ).custom(esActivo),
    check("id", "El id enviado no tiene un formato valido")
      .isMongoId()
      .trim()
      .escape()
      .custom(existeUsuario),
  ];
};

// Verifica las validaciones que vienen del request
validarCampos.validarCamposUsuarios = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
module.exports = validarCampos;
