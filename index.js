

const routes = require('./routes');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// crear la conexion a la bbdd
const db = require('./config/db');
require('./model/Proyectos');
// db.authenticate().then(()=>{ // solo conecta al servidor
db.sync().then(() => {
    console.log('Conectqado al servidor');
}, () => {
    console.log("error en la coneciones");

})
// crear una app de express
const app = express();

// donde cargar los archivos estaticos
app.use(express.static('public'));

// habilitar pug 
app.set('view engine', 'pug');

//añadir la carpeta de las vistas
app.set('views', path.join(__dirname, 'views'));

// habilitar bodyParser para leer datos
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', routes());

// puerto de escucha  
app.listen(3000);


