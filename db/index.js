const mongoose = require('mongoose')

mongoose
.connect('mongodb+srv://carlmenke13:dgb@dgb.n9z04.mongodb.net/sample_mflix?retryWrites=true&w=majority')
.then(()=>{
    console.log('successfully connected to egdb')
})
.catch((e)=>{
    console.log('Error Connecting: ' , e.message);
})

// mongoose.set('debug' , true)
const db = mongoose.connection;

module.exports = db




