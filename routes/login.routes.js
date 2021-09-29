const router = require('express').Router();
const {verificarUsuario} = reuqire('../controllers/login.controllers');


router.post('/verificar', verificarUsuario)