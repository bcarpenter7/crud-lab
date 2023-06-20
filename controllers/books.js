const Book = require("../models/book")


module.exports = {
    index,
    show,
    new: newBook,
    create,
    delete: deleteBook,
    edit,
    update: updateBook
}


async function index(req, res){
    const booksAll = await Book.find({})
    const context = {
        books: booksAll,
		title: 'Books'
    }
    res.render('books/index', context)
}


async function show(req, res){
    const oneBook = await Book.findById(req.params.id)
    const context = {
        book: oneBook,
		title: oneBook.title
    }
    res.render('books/show', context)
}

function newBook(req, res){
    res.render('books/new', {
		errorMsg: '',
		title: 'New Book'
	})
}

async function edit(req, res){
    const currentBook = await Book.findById(req.params.id)
    res.render('books/edit', {
        book: currentBook,
		title: `Edit ${currentBook.title}`,
        errorMsg: ''
    })
}

async function updateBook(req, res){
    try {
        const bookId = req.params.id
        const bookBody = req.body

        await Book.findByIdAndUpdate(bookId, bookBody)
        /// Takes id to find it, req.body is what it is updating
        res.redirect(`/books/${bookId}`)
    } catch(err){
        console.log(err)
        res.render('error', {errorMsg: err.message})
    }
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