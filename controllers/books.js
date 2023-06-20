const Book = require("../models/book")


module.exports = {
    index,
    show,
    new: newBook,
    create,
    delete: deleteBook
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