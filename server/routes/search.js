const express = require("express");
const { searchResults } = require("../BL/searchBL")

const router = express.Router();

router.get('/:query', async (req, res) => {
    try {
        const results = await searchResults(req.params.query);
        res.json(results); // Send the results back to the client
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
})

module.exports = router;
