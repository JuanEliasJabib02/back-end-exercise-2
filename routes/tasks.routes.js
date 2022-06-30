const express= require('express'); 


const { 
    createTasks,
    updateTask,
    cancelTask,
    consultTaskByStatus,
    consultTasks

} = require('../controllers/tasks.controller');




const tasksRouter = express.Router();

tasksRouter.get('/', consultTasks );

tasksRouter.post('/',  createTasks);

tasksRouter.get('/:status', consultTaskByStatus );

tasksRouter.patch('/:id', updateTask );

tasksRouter.delete('/:id', cancelTask )


module.exports = { tasksRouter }