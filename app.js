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


function displayBook(array) {
    array.forEach(book => {
        if (displayedBooks.includes(book)) {
            return;
        } else if (!displayedBooks.includes(book)) { 

        //Create DOM structure for every card
        const newCard = document.createElement('div');
        newCard.classList.add('card');
        cards.appendChild(newCard);

        const cardMain = document.createElement('div');
        cardMain.classList.add('card-main');
        newCard.appendChild(cardMain);

        const title = document.createElement('p');
        title.classList.add('card-title');
        title.textContent = `${book.title}`;
        cardMain.appendChild(title);

        const author = document.createElement('p');
        if (book.author === '') {
            author.textContent = '';
        } else {
            author.textContent = `by ${book.author}`;
            cardMain.appendChild(author);  
        }

        const year = document.createElement('p');
        year.textContent = `${book.year}`;
        cardMain.appendChild(year);

        const readDiv = document.createElement('div');
        readDiv.classList.add('read-div')
        const read = document.createElement('p');
        read.textContent = `${book.read}`;
        const switchButton = document.createElement('span');
        switchButton.classList.add('switch-button', 'material-symbols-outlined');
        readDiv.appendChild(read);
        readDiv.appendChild(switchButton);
        cardMain.appendChild(readDiv);

        const cardButtons = document.createElement('div');
        cardButtons.classList.add('card-buttons');
        newCard.appendChild(cardButtons);

        const favoriteButton = document.createElement('span');
        favoriteButton.classList.add('favorite-button', 'material-symbols-outlined');
        favoriteButton.textContent = 'favorite';
        cardButtons.appendChild(favoriteButton);

        const deleteButton = document.createElement('span');
        deleteButton.classList.add('delete-button', 'material-symbols-outlined');
        deleteButton.textContent = 'delete';
        cardButtons.appendChild(deleteButton);

        if (read.textContent === 'Read') {
            switchButton.textContent = 'toggle_on';
            switchButton.style.color = '#2BAE66';
        } else if (read.textContent === 'Not read') {
            switchButton.textContent = 'toggle_off';
            switchButton.style.color = '#323232';
        }

        const alreadyInFavorites = favoriteBooks.some(item => {
            return book.title === item.title && book.author === item.author && book.year === item.year;
        })
        if (alreadyInFavorites) {
            if (book.favorite === 'Yes') {
                return;
            }
        } else if (!alreadyInFavorites) {
            if (book.favorite === 'Yes') {
                const favoriteBook = document.createElement('p');
                if (book.author === '') {
                    favoriteBook.textContent = `${book.title}`;
                } else {
                    favoriteBook.textContent = `${book.title} by ${book.author}`;
                }
                favoriteBooksList.appendChild(favoriteBook);
                favoriteButton.classList.add('favorite-button-red');
                favoriteBooks.push(book);
            } else if (book.favorite === 'No') {
                const favoriteBook = document.createElement('p');
                favoriteBooksList.appendChild(favoriteBook);
        }}

        displayedBooks.push(book);


        //Add event listeners to the switch, favorite and delete button
        switchButton.addEventListener('click', () => {
            if (read.textContent === 'Read') {
                read.textContent = 'Not read';
                book.read = 'Not read';
                switchButton.textContent = 'toggle_off';
                switchButton.style.color = '#323232';
            } else if (read.textContent === 'Not read') {
                read.textContent = 'Read';
                book.read = 'Read';
                switchButton.textContent = 'toggle_on';
                switchButton.style.color = '#2BAE66';
            }
        })

        favoriteButton.addEventListener('click', () => {
        const children = favoriteBooksList.children;
        let existsInFavorites = false;
        const favoriteIndex = favoriteBooks.indexOf(book);
        for (const child of children) {
            if ((book.author === '' && child.textContent === `${book.title}`) || 
            (book.author !== '' && child.textContent === `${book.title} by ${book.author}`)) {
                existsInFavorites = true;
                favoriteBooksList.removeChild(child);
                favoriteButton.classList.remove('favorite-button-red');
                book.favorite = 'No';
                favoriteBooks.splice(favoriteIndex, 1);
                break;
            }
        }
        if (!existsInFavorites) {
            const favoriteBook = document.createElement('p');
            if (book.author === '') {
                favoriteBook.textContent = `${book.title}`;
            } else {
                favoriteBook.textContent = `${book.title} by ${book.author}`;
            }
            favoriteBooksList.appendChild(favoriteBook);
            favoriteButton.classList.add('favorite-button-red');
            book.favorite = 'Yes';
            favoriteBooks.push(book);
            }
        });

        const index = myLibrary.indexOf(book);
        deleteButton.addEventListener('click', function() {
            if (cards.childElementCount > 1) {
                cards.removeChild(newCard);
                myLibrary.splice(index, 1);
                displayedBooks.splice(index, 1);
                if (favoriteBooksList.textContent.includes(book.title)) {
                    const paragraphs = favoriteBooksCard.querySelectorAll('p');
                    paragraphs.forEach((para) => {
                        if (book.author === '' && para.textContent === `${book.title}`) {
                                favoriteBooksList.removeChild(para);
                                favoriteBooks.splice(favoriteIndex, 1);
                        } else if (book.author !== '' && para.textContent === `${book.title} by ${book.author}`) {
                            favoriteBooksList.removeChild(para);
                            favoriteBooks.splice(favoriteIndex, 1);
                        }
                })
            }
            } else if (cards.childElementCount === 1) {
                if (favoriteBooksList.textContent.includes(book.title)) {
                    const paragraphs = favoriteBooksList.querySelectorAll('p');
                    paragraphs.forEach((para) => {
                        if (book.author === '' && para.textContent === `${book.title}`) {
                                favoriteBooksList.removeChild(para);
                        } else if (book.author !== '' && para.textContent === `${book.title} by ${book.author}`) {
                            favoriteBooksList.removeChild(para);
                        }
                })
            }
                cards.removeChild(newCard);
                myLibrary.pop();
                displayedBooks.pop();
                favoriteBooks.pop();

                const emptyLibraryCard = document.createElement('div');
                emptyLibraryCard.classList.add('empty-library-card');
                const emptyLibraryCardText = document.createElement('p');
                emptyLibraryCardText.classList.add('empty-library-card-text')
                emptyLibraryCard.appendChild(emptyLibraryCardText);
                const emptyLibraryCardButtonDiv = document.createElement('div');
                emptyLibraryCardButtonDiv.classList.add('empty-library-card-button-div');
                const emptyLibraryCardButton = document.createElement('span');
                emptyLibraryCardButton.classList.add('new-book-button', 'material-symbols-outlined');
                emptyLibraryCardButton.textContent = 'add';
                emptyLibraryCardButtonDiv.appendChild(emptyLibraryCardButton);
                emptyLibraryCard.appendChild(emptyLibraryCardButtonDiv);
                emptyLibraryCardText.textContent = 'Your library is empty! 😭';
                cards.appendChild(emptyLibraryCard);

                emptyLibraryCardButton.addEventListener('click', () => {
                    newBookModal.showModal();
                })
            }
        })
    }
})}


clearButton.addEventListener('click', () => {
    if (cards) {
        while (cards.firstChild) {
            cards.removeChild(cards.firstChild);
        }
    }
    myLibrary.splice(0);
    displayedBooks.splice(0);
    favoriteBooks.splice(0);
    favoriteBooksList.textContent = '';
    const emptyLibraryCard = document.createElement('div');
    emptyLibraryCard.classList.add('empty-library-card');
    const emptyLibraryCardText = document.createElement('p');
    emptyLibraryCardText.classList.add('empty-library-card-text')
    emptyLibraryCard.appendChild(emptyLibraryCardText);
    const emptyLibraryCardButtonDiv = document.createElement('div');
    emptyLibraryCardButtonDiv.classList.add('empty-library-card-button-div');
    const emptyLibraryCardButton = document.createElement('span');
    emptyLibraryCardButton.classList.add('new-book-button', 'material-symbols-outlined');
    emptyLibraryCardButton.textContent = 'add';
    emptyLibraryCardButtonDiv.appendChild(emptyLibraryCardButton);
    emptyLibraryCard.appendChild(emptyLibraryCardButtonDiv);
    emptyLibraryCardText.textContent = 'Your library is empty! 😭';
    cards.appendChild(emptyLibraryCard);

    emptyLibraryCardButton.addEventListener('click', () => {
        newBookModal.showModal();
    })})


newBookButton.addEventListener('click', () => {
    newBookModal.showModal();
})