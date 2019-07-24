'user strict'

const Book = require('../models/books');

async function list(req, res) {
    try {
        const books = await Book.find();
        return res.status(200).json({
            books
        })
    } catch(e) {
        console.log('Error with list of books ', e);
    }
};


async function create(req, res) {
    try {
        const data = req.body;
        if (!data) {
            res.status(200).json({
                'message': 'Data is empty'
            });
        }

        const book = await Book.create(data);
        return res.status(200).json({
            book
        });
    } catch(e) {
        console.log('Error with create book ', e);
    }
}

async function edit(req, res) {
    try {
        const book = await Book.findById(req.params.id);
        return res.status(200).json({
            book
        });
    } catch(e) {
        console.log('Error with edit book ', e);
    }
}

async function update(req, res) {
    try {
        const data = { name: req.body.name, author: req.body.author, description: req.body.description }
        await Book.updateOne({_id: req.params.id} , data);
        return res.status(200).json({
            data
        });
    } catch(e) {
        console.log('Error with update book ', e); 
    }
}

async function remove(req, res) {
    try {
        const id = req.params.id;
        await Book.deleteOne({ _id: id })
        return res.status(200).json({
           message: 'Book deleted'
        })
    } catch(e) {
        console.log('Error with remove book ', e); 
    }
}

module.exports = {
    list,
    create,
    edit,
    update,
    remove
}