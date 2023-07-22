// library[] array that will store all the books the user entered
const library = [];

// constructor
function Book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
    library.push(this);
}

const book1 = new Book('Time Machine', 'H.G. Wells', 235, true);
const book2 = new Book('The Wizard of Oz', 'H.G. Wells', 235, false);
const book3 = new Book('The Witcher 3', 'H.G. Wells', 235, true);
displayBooks();

// Function that displays books in the page
function displayBooks() {

    // loop through the library[] to get all the info to display
    for (book of library) {
        const bookContainer = document.querySelector('.books-container');
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        const bookTitle = document.createElement('div');
        const bookAuthor = document.createElement('div');
        const bookPages = document.createElement('div');
        const isReadButton = document.createElement('button');
        const editButton = document.createElement('button');
        const deleteButton = document.createElement('button');

        bookTitle.textContent = book.title;
        bookTitle.classList.add('book-title');

        bookAuthor.textContent = 'Author: ' + book.author;
        bookAuthor.classList.add('book-author');

        bookPages.textContent = 'Pages: ' + book.pages;
        bookPages.classList.add('book-pages');

        isReadButton.textContent = 'read';
        isReadButton.classList.add('read-btn');
        if (book.isRead) {
            isReadButton.style.backgroundColor = 'green';
        } else {
            isReadButton.style.backgroundColor = 'red';
        }

        editButton.textContent = 'edit';
        editButton.classList.add('edit-btn');

        deleteButton.textContent = 'delete';
        deleteButton.classList.add('delete-btn');

        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(isReadButton);
        bookCard.appendChild(editButton);
        bookCard.appendChild(deleteButton);
        bookContainer.appendChild(bookCard);
    }
}


// Modal's eventlisteners
const addButton = document.querySelector('#add-btn');
const closeButton = document.querySelector('.close-btn');
const addModal = document.querySelector('.add-modal');


// If user clicked add button on main page, modal will open
addButton.addEventListener('click', function () {
    addModal.style.display = 'block';
});

// If user clicked the close button, close the modal
closeButton.addEventListener('click', function () {
    addModal.style.display = 'none';
});

// If user clicked outside the modal, close the modal
window.addEventListener('click', function (event) {
    if (event.target == addModal) {
        addModal.style.display = 'none';
    }
});