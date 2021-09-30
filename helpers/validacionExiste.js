

const usuarios = require('../models/usuarios');

// Función que consulta a la base de datos si existe el rol enviado por el usuario
const rolValido = async (rol = '') => {
    // Se busca el rol en la base de datos
    if (rol !== req.Usuario) {
        throw new Error('El rol seleccionado no es válido')  
    }
       
    
};


// Función que verifica si el email ya existe en la base de datos
const existeEmail = async (username = '') => {
    const emailEncontrado = await usuarios.findOne({ username });
    if (emailEncontrado) {
        throw new Error('Ya existe un usuario registrado con ese nombre')
    };
}

const existeUsuario = async (id) => {
    const user = await Users.findById(id);

    if(!user){
        throw new Error('El usuario no existe')
    }
}

module.exports = {
    rolValido,
    existeEmail,
    existeUsuario
}