// grab the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const flashcardSchema = new Schema({
    // Simple declaration of datatype that will be used:
    front: {
        required:true,
        unique:true,
        type: String
    },
    back:{
        required:true,
        type:String
    }
});


module.exports = mongoose.model("flashcard", flashcardSchema);
