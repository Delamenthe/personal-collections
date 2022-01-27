const db = require('mongoose');

db.connect(process.env.MONGODB_URI)

module.exports = db;