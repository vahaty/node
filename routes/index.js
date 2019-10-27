const express = require('express');
const router = express.Router();

const producto = [
    { producto: 'Libro', precio: 20 },
    { producto: 'PC', precio: 200 }
]

module.exports = function () {º
    // ruta para el home 
    router.get('/', (request, response) => {
        response.send('Hola');
        // response.json(producto);
    });

    return router;
}