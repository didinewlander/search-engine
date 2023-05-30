const express = require('express');
const cors = require('cors');
const dbConfig = require("./server/config/dbConfig");
const searchRoute = require("./server/routes/search")

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const dbURI = process.env.MONGODB_CONNECTION_STRING;
dbConfig(dbURI);

app.use(express.urlencoded({ extended: true }));
app.use('/search', searchRoute);

app.listen(4000, () => console.log('listening on port 4000'));