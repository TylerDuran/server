// 1. ------ Import mongoose here ------
const mongoose = require('mongoose');

// 2. ------ Connect to the database ---
module.exports = (DB_NAME) => {
    mongoose.connect('mongodb://localhost/' + DB_NAME, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));
}