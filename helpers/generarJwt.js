const jsonWebToken = require('jsonwebtoken');


const generarJwt = (id) =>{

const payload = { id };

return new Promise((resolve, reject) =>{

    jsonWebToken.sing(payload, process.env.PRIVATE_KEY, (err,token) =>{

        if (err){
            reject('No se pudo crear el token'); 
        }
        resolve(token);
    })
})

}

module.exports = {
    generarJwt
}