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
    router.get('/nosotros', (request, response) => {
        response.render('nosotros');
        // response.json(producto);
    });

    return router;
}