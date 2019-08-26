'use strict';

const booksController = require('../controllers/booksController');

function initRoutes(app) {
    app.get('/books', booksController.list);
    app.post('/books', booksController.create);
    app.get('/books/:id', booksController.edit);
    app.put('/books/:id', booksController.update);
    app.delete('/books/:id', booksController.remove)
}

module.exports = {
    init: initRoutes
}

