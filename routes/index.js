const express = require('express');
const router = express.Router();

const producto = [
    { producto: 'Libro', precio: 20 },
    { producto: 'PC', precio: 200 }
]

// importar el controlador
const proyectosController = require('../controllers/proyectosController');


module.exports = function () {
    router.get('/',proyectosController.poyectosHome );
    // ruta para el home 
    router.get('/', (request, response) => {
        response.send('Hola');
        // response.json(producto);
    });

    return router;
}