const mongoose = require('mongoose')

mongoose
.connect(process.env.MONGO_PROD_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,   })
.then(()=>{
    console.log('successfully connected to egdb')
})
.catch((e)=>{
    console.log('Error Connecting: ' , e.message);
})

// mongoose.set('debug' , true)
const db = mongoose.connection;

module.exports = db




// const mongoose = require('mongoose')

// mongoose
// .connect('mongodb://127.0.0.1:27017/egdb' )
// .then(()=>{
//     console.log('successfully connected to egdb')
// })
// .catch((e)=>{
//     console.log('Error Connecting: ' , e.message);
// })

// // mongoose.set('debug' , true)
// const db = mongoose.connection;

// module.exports = db