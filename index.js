

const routes = require('./routes');
const express = require('express');

// crear una app de express
const app = express();

app.use('/', routes());

// puerto de escucha 
app.listen(3000);


