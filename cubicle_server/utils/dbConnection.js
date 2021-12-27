const MongoClient = require('mongodb').MongoClient;
const connectionString = "mongodb+srv://ahmed:ahmed@cluster0.jt0yp.mongodb.net/Cubicle?retryWrites=true&w=majority";
MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    const db = client.db('Cubicle')
    const quotesCollection = db.collection('User')
    console.log(quotesCollection.find())
  })
  .catch(error => console.error(error))
module.exports = MongoClient;


