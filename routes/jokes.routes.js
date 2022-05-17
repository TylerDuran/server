// ------- Import thr controller to use the instantiated model ------
const JokeController = require("../controllers/jokes.controller");

module.exports = (app) => {
    app.get("/api/jokes", JokeController.findAllJokes);
    app.post("/api/jokes/new", JokeController.createNewJoke);
    app.get("/api/jokes/random", JokeController.findRandomJoke);
    app.get("/api/jokes/:id", JokeController.findOneJoke);
    app.delete("/api/jokes/delete/:id", JokeController.deleteAnExistingJoke);
    app.put("/api/jokes/update/:id", JokeController.updateExistingJoke);
}