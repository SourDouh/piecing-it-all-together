const mongoose = require('mongoose');
const userModel = require('./models/flashcard')

const server = '127.0.0.1:27017';
const database = 'flashcards';      // Since we made our schema into a model, this should be created

class Database {
  constructor() {
    const connection = this._connect()
    //connection.dropCollection('flashcards')
    }
_connect() {
     return mongoose.connect(`mongodb://${server}/${database}`, { useNewUrlParser: true, useUnifiedTopology: true })
       .then(dbSuccess())
       .catch(err => {
         console.error('Database connection error')
       })
  }
}

function dbSuccess(){
  console.log('Database connection successful')

}

//creates a new database object
//which calls _connect()
module.exports = new Database()
