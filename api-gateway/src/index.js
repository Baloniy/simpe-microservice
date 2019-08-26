'use strict';

const express = require('express');
const proxy = require('http-proxy-middleware');
const app = express();
const { getDefaultOptions, getRoutes} = require('./service');



function start() {
    getRoutes().forEach(route => {
        const { path, target } = route;

        const options = {
            target
        }
        app.use(proxy(path, {
            ...options,
            ...getDefaultOptions()
        }))
    });
}

start();

app.listen(8080, () => {
    console.log('App Gateway start on port 8080');
})



