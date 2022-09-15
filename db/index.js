const mongoose = require('mongoose')

mongoose
.connect('https://dgb-server.herokuapp.com/api' )
.then(()=>{
    console.log('successfully connected to egdb')
})
.catch((e)=>{
    console.log('Error Connecting: ' , e.message);
})

// mongoose.set('debug' , true)
const db = mongoose.connection;

module.exports = db




