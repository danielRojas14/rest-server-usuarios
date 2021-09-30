const ctrlLogin = {}
const bcryptjs = require('bcryptjs');
const usuarios = require('../models/usuarios');
const {generarJwt} = require('../helpers/generarJwt')



ctrlLogin.verificarUsuario = async (req, res) => {

    const {gmail, password, ...datos} = req.body;

    try{

        const filtrarUsuario = await usuarios.findOne({gmail})

        if (!filtrarUsuario) {

            return  res.status(401).json({
                msg:'No se encontro ningun usuario con esos datos'
            });
            
        }

        if (!filtrarUsuario.estado) {

            return  res.status(401).json({
                msg:'No se encontro ningun usuario con esos datos'
            });
            
        }

        const compararPassword = bcryptjs.compareSync(password, filtrarUsuario.password);

        if (!compararPassword) {
            return res.status(401).json({
                msg: 'No se encontro ningun usuario con esos datos'
            })
        }



        const devolverToken = await generarJwt(filtrarUsuario.id)
        
        return res.status(200).json({
            devolverToken
        })

    }catch (error){
        return res.status(500).json({
            msg:'Ha ocurrido un error en el servidor'

    
        })

    }
}

module.exports = ctrlLogin;
