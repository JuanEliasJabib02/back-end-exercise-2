const { app } = require('./app') 

//Utils
const { db } = require('./utils/database.util') 


db.authenticate() 
    .then(() => console.log('Db authenticated'))
    .catch(err => console.log(err));


app.listen(4000, () =>{
    console.log('express app running ')
})