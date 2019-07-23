'user strict'

const User = require('../models/user');

async function list(req, res) {
    try {
        const users = await User.find();
        return res.status(200).json({
            users
        })
    } catch(e) {
        console.log('Error with list of users ', e);
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

        const user = await User.create(data);
        return res.status(200).json({
            user
        });
    } catch(e) {
        console.log('Error with create user ', e);
    }
}

async function edit(req, res) {
    try {
        const user = await User.findById(req.params.id);
        return res.status(200).json({
            user
        });
    } catch(e) {
        console.log('Error with edit user ', e);
    }
}

async function update(req, res) {
    try {
        const data = { name: req.body.name, email: req.body.email }
        await User.updateOne({_id: req.params.id} , data);
        return res.status(200).json({
            data
        });
    } catch(e) {
        console.log('Error with update user ', e); 
    }
}

async function remove(req, res) {
    console.log('Remove ')
    try {
        const id = req.params.id;
        await User.deleteOne({ _id: id })
        return res.status(200).json({
           message: 'User deleted'
        })
    } catch(e) {
        console.log('Error with remove user ', e); 
    }
}

module.exports = {
    list,
    create,
    edit,
    update,
    remove
}