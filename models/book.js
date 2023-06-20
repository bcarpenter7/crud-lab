const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    author: String,
    title: String,
    pages: Number,
    genre: String
})

module.exports = mongoose.model('Book', bookSchema)