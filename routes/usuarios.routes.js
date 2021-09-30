const router = require("express").Router();

const { validarJWT } = require('../middleware/validarJwt');



const {
  validarRolListarUsuarios,
  validarRolCrearUsuario,
  validarRoleActualUsuario,
  validarRolBorrarUsuario,
} = require("../middleware/validarRoles");

const {
  validacionesCamposObtenerUnUsuario,
  validacionesCamposCrearUsuario,
  validacionesCamposModificarUsuario,
  validacionesCamposBorrarUsuario,
  validarCamposUsuarios,
} = require("../middleware/validarCampos");

const {
  rutaGet,
  rutaPost,
  rutaPut,
  deleteUsuario,
} = require("../controllers/usuarios.controllers");

//  Ruta que devuelve todos las notas
router.get("/listarUsuarios",[
  validarJWT,
  validarRolListarUsuarios,
  validacionesCamposObtenerUnUsuario],
 rutaGet);

router.post("/agregarUsuarios",[
  validarJWT,
  validarRolCrearUsuario,
  validacionesCamposCrearUsuario,
  validarCamposUsuarios],
   rutaPost);

// Actualizar las notas
router.put("/modificarUsuarios/:id",[
  validarJWT,
  validarRoleActualUsuario,
  validacionesCamposModificarUsuario,
  validarCamposUsuarios],
 rutaPut);

router.put("/deleteUsuarios/:id",[
  validarJWT,
  validarRolBorrarUsuario,
  validacionesCamposBorrarUsuario,
  validarCamposUsuarios]
,deleteUsuario);

module.exports = router;
