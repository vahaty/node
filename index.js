

const routes = require('./routes');
const express = require('express');
const path = require('path');

// crear una app de express
const app = express();

// habilitar pug 
app.set('view engine', 'pug');

//añadir la carpeta de las vistas
app.set('views', path.join(__dirname, 'views'));


app.use('/', routes());

// puerto de escucha 
app.listen(3000);


