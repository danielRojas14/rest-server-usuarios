

const usuarios = require('../models/usuarios');


// Función que verifica si el email ya existe en la base de datos
const existeEmail = async (gmail = '') => {

    console.log(gmail);
    const emailEncontrado = await usuarios.findOne({ gmail });

    if (emailEncontrado) {
        throw new Error('Ya existe un usuario registrado con ese nombre')
    };
}

const existeUsuario = async (id) => {
    const Usuarios = await usuarios.findById(id);

    if(!Usuarios){
        throw new Error('El usuario no existe')
    }
}

const esActivo = async (id) => {
    const Usuarios = await usuarios.findOne(id,);
    if(!Usuarios){
        throw new Error('El usuario no existe o esta inactivo')
    }
}

module.exports = {
    existeEmail,
    existeUsuario,
    esActivo
}