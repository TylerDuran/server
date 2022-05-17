// ------Import mongoose to build a model------
const mongoose = require('mongoose');

// ------The Schema - The rules that the entries in the DB must follow 
const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Must have a setup"],
        minlength: [10, "{PATH} be at least 10 characters long, you gave {VALUE}"]
    },
    punchline: {
        type: String,
        required: [true, "Must have a punchline"],
        minlength: [3, "{PATH} be at least 3 characters long, you gave {VALUE}"]
    }
}, { timestamps: true });

// ------ The model- this is what we use to make the actual queries to the database
const Joke = mongoose.model('Joke', JokeSchema);

// ------ Export the model --------------------
module.exports = Joke;