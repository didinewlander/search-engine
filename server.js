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

const port = process.env.PORT || 5500;

// Listen on `port` and 0.0.0.0
app.listen(port, "0.0.0.0", () => console.log(`${port} is listened`));
