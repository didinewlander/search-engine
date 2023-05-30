const { getResultByRequest } = require("../DAL/searchDAL");

const searchResults = async (query) => {
    const results = await getResultByRequest(query);
    return results;
}

module.exports = { searchResults };