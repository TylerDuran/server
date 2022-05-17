// ------ Controller is all CRUD ------
// ------ MAking queries to the DB ----
// ------ Using the Model -------------
// ------ So we Import the Model ------

const Joke = require("../models/jokes.model")

// ------ Make all the CRUD -----------

// READ ALL ---------------------------
module.exports.findAllJokes = (req, res) => {
    // Use the model to execute a query 
    Joke.find()
        .then(allDaJokes => {
            console.log(allDaJokes);
            return res.json(allDaJokes);
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// CREATE ------------------------------
module.exports.createNewJoke = (req, res) => {
    // This process is the same as inserting like db.jokes.insert({ setup: 'Where do programmers hang out?', punchline: 'The Foo Bar' })
    // console.log(req.body)
    Joke.create(req.body)
        // what we return here is what we will recive in react 
        .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// READ ONE ---------------------------
module.exports.findOneJoke = (req, res) => {
    // /api/jokes/:id
    Joke.findOne({ _id: req.params.id })
        .then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// UPDATE ONE --------------------------
module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => res.json({ user: updatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// DELETE ONE --------------------------
module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// RANDOM ONE ---------------------------
module.exports.findRandomJoke = (req, res) => {
    Joke.find()
    .then(allDaJokes => {
        console.log(allDaJokes);
        let randomInt = Math.floor(Math.random() * allDaJokes.length);
        return res.json(allDaJokes[randomInt]);
    })
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
