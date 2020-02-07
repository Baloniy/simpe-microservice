'use strict'
require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const { db } = require('./config/database');
const routes = require('./routes');

function start() {
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
    app.use(bodyParser.json())

    db();
    routes.init(app);

    const PORT = process.env.PORT || 8082;
    app.listen(PORT, () => console.log(`Books service listening on port ${PORT}`));
}

start();
