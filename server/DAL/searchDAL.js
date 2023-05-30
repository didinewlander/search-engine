const Search = require('../models/search');

const getResultByRequest = async (query) => {
    const regex = new RegExp(query, 'i'); // 'i' makes it case insensitive
    return await Search.find({
        $or: [
            { query: regex },
            { description: regex },
            { link: regex }
        ]
    });
}


module.exports = {
    getResultByRequest
}