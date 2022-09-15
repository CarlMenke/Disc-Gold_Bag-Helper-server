const mongoose = require('mongoose')

mongoose
.connect("mongodb+srv://dgb:dgb@dgb-database.cnmbjgn.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('successfully connected to egdb')
})
.catch((e)=>{
    console.log('Error Connecting: ' , e.message);
})

// mongoose.set('debug' , true)
const db = mongoose.connection;

module.exports = db




