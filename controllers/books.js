const Book = require("../models/book")


module.exports = {
    index
}

async function index(req, res){
    const booksAll = await Book.find({})
    const context = {
        books: booksAll
    }
    res.render('books/index', context)
}