
const { db , DataTypes } = require('../utils/database.util') 

const Tasks = db.define('tasks', {

    id:{
        primaryKey: true,
        autoIncrement:true,
        allowNull:false,
        type: DataTypes.INTEGER
    },
    userId : {
        allowNull : false,
        type:DataTypes.NUMBER
    },
    limitDate: {
        type: DataTypes.DATE,
        allowNull:false
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull:true
    },
    finishDate: {
        type: DataTypes.DATE,
        allowNull:true
    },
    status:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:'active'
    },
});

module.exports = { Tasks };