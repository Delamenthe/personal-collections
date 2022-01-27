const db = require('mongoose');

db.connect('mongodb+srv://arinych:424099@cluster0.x1pfp.mongodb.net/personal-collections?retryWrites=true&w=majority').then(r => console.log("connected"))

module.exports = db;