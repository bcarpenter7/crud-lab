const Book = require("../models/book")


module.exports = {
    index,
    show,
    new: newBook
}

async function index(req, res){
    const booksAll = await Book.find({})
    const context = {
        books: booksAll
    }
    res.render('books/index', context)
}

async function show(req, res){
    const oneBook = await Book.findById(res.params.id)
    const context = {
        book: oneBook
    }
    res.render('books/show', context)
}

function newBook(req, res){
    res.render('books/new', {errorMsg: ''})
}