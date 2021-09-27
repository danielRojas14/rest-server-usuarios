const { body } = require("express-validator")

validarRegistro = () => {
    return [
      body('nombreUsu', 'Debe ingresar su nombre de usuario')
        .notEmpty()
        .not()
        .custom((val) => /[^A-za-z0-9\s]/g.test(val)),
      body('password', 'tiene que ingresar su contraseña')
        .notEmpty()
        .isLength({ min: 8 })
        
    ]
  }


  module.exports ={
    validarRegistro
  }