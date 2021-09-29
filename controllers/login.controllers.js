const ctrlLogin = {}
const { validationResult } = require("express-validator");
const usuarios = require('../models/usuarios');
const {generarJwt} = require('../helpers/generarJwt')
require('dotenv').config();


ctrlLogin.verificarUsuario = async (req, res) => {

    const {gmail, password} = req.body;

    try{

        const filtrarUsuario = await usuarios.find({
            gmail: gmail,
            password: password,
        })

        if (filtrarUsuario.length == 0) {

            return  res.status(401).json({
                msg:'No se encontro ningun usuario con esos datos'
            });
            
        }

        const id = filtrarUsuario[0]._id.toString();

        const devolverToken = await generarJwt(id)
        res.status(200).json({
            devolverToken;
        })

    }catch (error){
        return res.status(500).json({
            msg:'Ha ocurrido un error en el servidor'

    
        })

    }
}

module.exports = ctrlLogin;
