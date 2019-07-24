'use strict';

const express = require('express');
const proxy = require('http-proxy-middleware');
const app = express();

start();

function start() {
    return new Promise((resolve, reject) => {
        
        const { getDefaultOptions, getRoutes} = require('./service');

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

        const server = app.listen(8080, () => {
            console.log('App Gateway start on port 8080');
            resolve(server);
        })
    });
}





