const express = require('express');
const app = express();
const PORT = 8000;
const DB_NAME = "jokes_db";

// ------ MIDLEWARE ----------
app.use(express.json(), express.urlencoded({ extended: true }));

// ------ Conect to the mongodb with the server - by requiring the file here
require("./config/mongoose.config")(DB_NAME);

// ------ Import the Routes here (after the DB has Connected)
require("./routes/jokes.routes")(app);

// ------ Start The Server ----
// ------ Alwasy at the end ---
app.listen(PORT, () => console.log(`>>> Server is running on PORT: ${PORT} <<<`))