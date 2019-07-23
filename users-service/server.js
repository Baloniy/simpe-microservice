'use strict';
require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const { db } = require('./config/database');
const routes = require('./routes');

start()

function start() {
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
    app.use(bodyParser.json())

    db();
    routes.init(app);

    const PORT = process.env.PORT || 8081;
    app.listen(8081, () => console.log(`Users service listening on port ${PORT}`));
}
