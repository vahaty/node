
const express = require('express');

// crear una app de express
const app = express();

// ruta para el home 
app.use('/' , (request, response) =>{
    response.send('Hola');
});

// puerto de escucha 
app.listen(3000);


