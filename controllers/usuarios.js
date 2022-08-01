const { response } = require('express');

const usuariosGet = (req, res = response)=> {

    const {q,nombre = ' no name ',apikey,page=1,limit=20} = req.query;
    
    res.json({
        msg:'get api - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPut = (req, res = response)=> {

    const {id} = req.params;
    
    res.json({
        msg:'put api - controller',
        id

    });
 }

const usuariosPost = (req, res = response)=> {

    const {nombre,google} = req.body;

    res.json({
        msg:'post api - controller',
        nombre,
        google
    });
}

const usuariosDelete = (req, res = response)=> {
    
    res.json({
        msg:'delete api - controller'
    });
}
const usuarioPatch = (req, res = response)=> {
    res.json({
        msg:'patch api - controller'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuarioPatch
}