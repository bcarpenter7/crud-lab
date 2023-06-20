const Book = require("../models/book")


module.exports = {
    index,
    show,
    new: newBook,
    create,
    delete: deleteBook,
    edit
}


async function index(req, res){
    const booksAll = await Book.find({})
    const context = {
        books: booksAll
    }
    res.render('books/index', context)
}


async function show(req, res){
    const oneBook = await Book.findById(req.params.id)
    const context = {
        book: oneBook
    }
    res.render('books/show', context)
}

function newBook(req, res){
    res.render('books/new', {errorMsg: ''})
}

async function edit(req, res){
    const currentBook = await Book.findById(req.params.id)
    res.render('books/edit')
}


async function create(req,res){
try {
    await Book.create(req.body)
    res.redirect('/books')
} catch(err){
    console.log(err)
    res.render('books/new', {errorMsg: err.message})
}
}

async function deleteBook(req, res){
    try {
        await Book.findByIdAndDelete(req.params.id)
        res.redirect('/books')
    } catch(err){
        console.log(err)
        res.render('error', {errorMsg: err.message})
    }
}