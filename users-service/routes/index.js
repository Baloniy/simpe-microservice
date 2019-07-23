'use strict';

const userController = require('../constrollers/userController');

function initRoutes(app) {
    app.get('/users', userController.list);
    app.post('/users/create', userController.create);
    app.get('/users/:id', userController.edit);
    app.put('/users/:id', userController.update);
    app.delete('/users/:id', userController.remove)
}

module.exports = {
    init: initRoutes
}