const { body } = require('express-validator/check');

const express = require('express');
const router = express.Router();

const producto = [
    { producto: 'Libro', precio: 20 },
    { producto: 'PC', precio: 200 }
]

// importar el controlador
const proyectosController = require('../controllers/proyectosController');

module.exports = function () {
    router.get('/', proyectosController.poyectosHome);
    router.get('/nuevo-proyecto', proyectosController.formularioProyecto);
    router.post('/nuevo-proyecto',
        body('nombre').not().isEmpty().trim(), //validacion del body que no este vacio y elimar espacios blancos
        proyectosController.nuevoProyecto
    );
    router.get('/proyectos/:url', proyectosController.proyectoPorUrl);

    // actulizar el proyecto 
    router.get('/proyecto/editar/:id', proyectosController.formularioEditar)
    return router;
}