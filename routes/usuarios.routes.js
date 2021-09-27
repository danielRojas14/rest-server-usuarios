const router = require("express").Router();

const {
  rutaGet,
  rutaPost,
  rutaPut,
  deleteUsuario,
} = require("../controllers/usuarios.controllers");

//  Ruta que devuelve todos las notas
router.get("/", rutaGet);

router.post("/", rutaPost);

// Actualizar las notas
router.put("/", rutaPut);

router.put("/deleteUsuarios", deleteUsuario);

module.exports = router;
