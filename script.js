const Book = require("./models/book");

// add to line 9 of server
// require('./script').main();


const books = [
	{
		title: 'Ulysses',
		author: 'James Joyce',
		pages: 732,
		genre: 'Novel',
	},
	{
		title: 'Don Quixote',
		author: 'Miguel de Cervantes',
		pages: 928,
		genre: 'Novel',
	},
	{
		title: 'The Great Gatsby',
		author: 'F. Scott Fitzgerald',
		pages: 208,
		genre: 'Novel',
	},
	{
		title: 'Moby Dick',
		author: 'Herman Melville',
		pages: 427,
		genre: 'Novel',
	},
	{
		title: 'War and Peace',
		author: 'Leo Tolstoy',
		pages: 1296,
		genre: 'Novel',
	},
	{
		title: 'Hamelet',
		author: 'William Shakespeare',
		pages: 104,
		genre: 'Novel',
	},
	{
		title: 'The Odyssey',
		author: 'Homer',
		pages: 384,
		genre: 'Novel',
	},
	{
		title: 'The Divine Comedy',
		author: 'Dante Alighieri',
		pages: 712,
		genre: 'Novel',
	},
	{
		title: 'The Brothers Karamazov',
		author: 'Fyodor Dostoyevsky',
		pages: 840,
		genre: 'Novel',
	},
	{
		title: 'Crime and Punishment',
		author: 'Fyodor Dostoyevsky',
		pages: 430,
		genre: 'Novel',
	},
	{
		title: 'Wuthering Heights',
		author: 'Emily Bronte',
		pages: 416,
		genre: 'Novel',
	},
	{
		title: 'The Catcher in the Rye',
		author: 'JD Salinger',
		pages: 234,
		genre: 'Novel',
	},
	{
		title: 'Pride and Prejudice',
		author: 'Jane Austin',
		pages: 254,
		genre: 'Novel',
	},
	{
		title: 'The Adventures of Huckleberry Finn',
		author: 'Mark Twain',
		pages: 448,
		genre: 'Novel',
	},
	{
		title: 'Anna Karenina',
		author: 'Leo Tolstoy',
		pages: 864,
		genre: 'Novel',
	},
	{
		title: 'The Iliad',
		author: 'Homer',
		pages: 560,
		genre: 'Novel',
	},
	{
		title: 'Great Expectations',
		author: 'Charles Dickens',
		pages: 512,
		genre: 'Novel',
	},
	{
		title: 'A Christmas Carol',
		author: 'Charles Dickens',
		pages: 62,
		genre: 'Novel',
	},
	{
		title: 'A Tale of Two Cities',
		author: 'Charles Dickens',
		pages: 304,
		genre: 'Novel',
	},
	{
		title: 'The Grapes of Wrath',
		author: 'John Steinbeck',
		pages: 619,
		genre: 'Novel',
	},
	{
		title: 'Cat in the Hat',
		author: 'Dr. Suess',
		pages: 36,
		genre: 'Childrens',
	},
]


function main() {
	books.forEach(book => addBook(book));
}

async function addBook(b) {
	try {
		await Book.create(b);
	} catch (err) {
		console.log(err);
	};
}

module.exports = {
	main
}