const { Sequelize, DataTypes } = require('sequelize'); 

const db = new Sequelize ({
    host:'localhost',
    username:'postgres',
    dialect:'postgres',
    password:'0265dante',
    port:5432,
    database: 'Tasks',
    logging:false,
})

module.exports = { db,DataTypes }; 