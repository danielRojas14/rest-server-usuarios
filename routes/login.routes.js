const router = require('express').Router();
const {verificarUsuario} = require('../controllers/login.controllers');


router.post('/verificar', verificarUsuario)


module.exports = router;