const sequelize = require('sequelize');

const db = required('../config/db');

const Proyectos = db.define('proyecto', {

    id: {
        type: sequelize.INTEGER
        // primaryKey: true,
        // autoIncrement: true
    },
    nombre: sequelize.STRING,
    url: sequelize.STRING


});

module.exports = Proyectos;