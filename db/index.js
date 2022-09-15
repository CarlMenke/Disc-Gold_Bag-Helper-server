

const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://dgb:dgb@dgb-database.cnmbjgn.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});




// const mongoose = require('mongoose')

// mongoose
// .connect('mongodb+srv://carl:dgb@dgb.n9z04.mongodb.net/sample_mflix?retryWrites=true&w=majority')
// .then(()=>{
//     console.log('successfully connected to egdb')
// })
// .catch((e)=>{
//     console.log('Error Connecting: ' , e.message);
// })

// mongoose.set('debug' , true)
const db = client.connection;

module.exports = db




