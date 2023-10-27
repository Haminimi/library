const myLibrary = [];
const displayedBooks = [];
const favoriteBooks = [];
const cards = document.querySelector('#cards');
const favoriteBooksCard = document.querySelector('#favorite-books')
const favoriteBooksList = document.querySelector('#list');
const newBookButton = document.querySelector('.new-book-buttons');
const newBookModal = document.querySelector('#new-book-modal');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const yearInput = document.querySelector('#year');
const readInput = document.querySelector('select');
const favoriteInput = document.querySelector('#favorite');
const confirmButton = document.querySelector('#confirm-button');
const form = document.querySelector('form');
const clearButton = document.querySelector('#clear-all');


function Book(title, author, year, read, favorite) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.read = read;
    this.favorite = favorite;
}
const theHobbit = new Book('The Hobbit 🧙‍♂️', 'J.R.R. Tolkien', 1937, 'Read', 'Yes')
const theLOTR = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 1954, 'Not read', 'No')


function addBookToLibrary(book) {
    const alreadyDisplayed = displayedBooks.some(item => {
        return book.title === item.title && book.author === item.author && book.year === item.year;
    })
    if (alreadyDisplayed) {
        return;
    } else {
    myLibrary.push(book);
}}
addBookToLibrary(theHobbit);
addBookToLibrary(theLOTR);