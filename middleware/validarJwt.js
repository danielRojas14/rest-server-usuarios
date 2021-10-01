const usuario = require('../models/usuarios');
const jwt = require('jsonwebtoken');



const validarJWT = async (req, res, next) =>{

    const token = req.headers.token;

    // console.log(token);

    if (!token) {
        return res.status(401).json({
            msg:'El token es invalido'
        })
    }

    try{
        const  {id}  = jwt.verify(token, process.env.PRIVATE_KEY)
        // console.log(id);
        
        const Usuario = await usuario.findById(id);
        
        if (!Usuario) {
            return res.status(401).json({
                msg:'El usuario no existe'
            })
        }

        if (!Usuario.estado) {
            return res.status(401).json({
                msg:'El usuario no existe'
            })
            
        }

        req.Usuario = Usuario.rol;

        next();
    
    }catch(err){
console.log(err);
        return res.status(401).json({
            msg:'Error al verificar token'
        })
    }

}

module.exports = {
    validarJWT
}