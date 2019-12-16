const sequelize = require('sequelize');

const db = require('../config/db');
const shortid = require('shortid')
const Proyectos = db.define('proyectos', {

    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: sequelize.STRING,
    url: sequelize.STRING
},{
    // ejecuta una funcion en un determinado tiempo
    hooks:{
        beforeCreate(proyecto){
            console.log('Antes de insertar en la BBDD');
            const url = slug(proyecto.nombre).toLowerCase();
            proyecto.url =  `${url}-${shortid.generate}`
        }
    }
});

module.exports = Proyectos;