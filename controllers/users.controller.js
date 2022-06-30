
//5- Import Models
const { Users } = require('../models/users.model');
const { Tasks } = require('../models/tasks.model')

//Controllers 5.2 Define controllers


const getAllUsers =  async (res, req, next) => () => {
    //Logic for get 
    
}

const createUser = async(res, req, next) => () => {
    //Logic for createUser
}

const updateUser = async(res, req, next) => () => {
    //Logic for createUser
}


const deleteUser = async(res, req, next) => () =>{
    //Logic for delete user 
}

module.exports = {
    getAllUsers,
    createUser, 
    updateUser, 
    deleteUser
};