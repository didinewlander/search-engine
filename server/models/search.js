const mongoose = require("mongoose");

const searchSchema = new mongoose.Schema({
    query: String, // the name of the data object (EX - Google Search)
    description: String, // more specific description of the data object (EX - Use Google to search the web)
    link: String, // link to object (EX - https://www.google.com)
},
    { versionKey: false });

// // Add this line to create a text index on the 'query' and 'description' fields
// searchSchema.index({ query: 'text', description: 'text', link: 'text' });

module.exports = mongoose.model('entries', searchSchema);
