const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
const dbConfig = (uri) => {
    mongoose.connect(uri)
        .then(() => console.log('Search Engine Engaged'))
        .catch((error) => console.log(error));
}
const connection = mongoose.connection;
connection.once("open", () =>
    console.log('Search Engine Available')
 )
module.exports = dbConfig;