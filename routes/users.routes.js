const express= require('express'); 
const { 
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/users.controller');





const usersRouter = express.Router();

usersRouter.get('/', getAllUsers);

usersRouter.post('/', createUser);

usersRouter.patch('/:id', updateUser);

usersRouter.delete('/:id', deleteUser);


module.exports = { usersRouter } ;

