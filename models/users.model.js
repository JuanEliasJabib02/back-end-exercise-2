
const { db , DataTypes } = require('../utils/database.util') 



const Users = db.define('users', { 

    id:{
        primaryKey: true,
        autoIncrement:true,
        allowNull:false,
        type: DataTypes.INTEGER
    },
    name : {
        allowNull : false,
        type:DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    status:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:'active'
    },
});

module.exports = { Users };