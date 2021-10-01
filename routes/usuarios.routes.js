const router = require("express").Router();

const { validarJWT } = require('../middleware/validarJwt');



const {
  validarRolListarUsuarios,
  validarRolCrearUsuario,
  validarRolActualUsuario,
  validarRolBorrarUsuario,
} = require("../middleware/validarRoles");

const {
  validacionesCamposObtenerUnUsuario,
  validacionesCamposCrearUsuario,
  validacionesCamposActualUsuario,
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
  validacionesCamposCrearUsuario(),
  validarCamposUsuarios],
   rutaPost);

// Actualizar las notas
router.put("/modificarUsuarios/:id",[
  validarJWT,
  validarRolActualUsuario,
  validacionesCamposActualUsuario(),
  validarCamposUsuarios
],
rutaPut);

router.put("/deleteUsuarios/:id",[
  validarJWT,
  validarRolBorrarUsuario,
  validacionesCamposBorrarUsuario(),
  validarCamposUsuarios]
,deleteUsuario);

module.exports = router;
