'use strict';

const express = require('express');
const proxy =  require('express-http-proxy');

const app = express();

const proxyMiddleware = (route) => {
    return function(req, res, next) {
        console.log(req.originalUrl);
        return proxy(`${route.host}:${route.port}`)(req, res, next)
    }
}


function start() {
    console.log('Start');
    return new Promise((resolve, reject) => {
        
        const routes = require('./routes');
        if (!routes) {
            reject(new Error('The server must be started with routes'));
        }

        routes.forEach(route => {
            console.log('Route ', route);
            const { prefix } = route;

           app.use(`/${prefix}`, proxyMiddleware(route))
        });

        const server = app.listen(8080, () => {
            console.log('App Gateway start on port 8080');
            resolve(server);
        })
    });
}


start();





