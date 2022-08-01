const express = require('express')
const cors = require('cors')

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosRoutePath = '/api/usuarios';

        //MIDDLEWARES
        this.middleware();

        //RUTAS DE MI APP

        this.routes();
        
    }

    middleware(){
        //directorio publico
        this.app.use(express.static('public'));
        //cors
        this.app.use(cors());
        //Parseo y lectura del body
        this.app.use(express.json());

    }

    routes (){

        this.app.use(this.usuariosRoutePath,require('../routes/usuarios'))
        

        
    }

    listen (){
        this.app.listen(this.port,()=>{
            console.log('servidor corriendo en el puerto',this.port);
        });
    }
}

module.exports = Server;