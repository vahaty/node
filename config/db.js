const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('UpTaskNode', 'root', 'Soniaramiro0', {
  host: 'localhost',
  dialect:  'mysql',
  port:'3306',
  define: {
    timestamps: false
  },
  pool: {
    max: 5,
    min: 0, 
    acquire: 30000,
    idle: 10000
  }
});

module.exports = sequelize;