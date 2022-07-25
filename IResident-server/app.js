require("dotenv").config();
require("./config/database").connect();
const bodyParser = require("body-parser");
const cors = require("cors");

const express = require("express");

const app = express();

app.use(bodyParser.json())
app.use(cors());

const authRouters = require('./routers/auth')
app.use('/api/auth', authRouters);
const consultRouters = require('./routers/consultation');
app.use('/api/upload', consultRouters);

// Logic goes here

module.exports = app;