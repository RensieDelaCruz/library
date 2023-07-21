const library = [];

// constructor
function Book(title, author, pages, isRead){
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}

const book1 = new Book('Time Machine', 'H.G. Wells', 235, true);
const book2 = new Book('The Wizard of Oz', 'H.G. Wells', 235, true);
const book3 = new Book('The Witcher 3', 'H.G. Wells', 235, true);
library.push(book1);
library.push(book2);
library.push(book3);
displayBooks();

function displayBooks(){
    for(book of library){
        const bookContainer = document.querySelector('.books-container');
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        const bookTitle = document.createElement('div');
        const bookAuthor = document.createElement('div');
        const bookPages = document.createElement('div');
        const checkbox = document.createElement('input');
        const checkboxLabel = document.createElement('label');
        const editButton = document.createElement('button');
        const deleteButton = document.createElement('button');
        
        bookTitle.textContent = 'Title: ' + book.title;
        bookTitle.classList.add('book-title');

        bookAuthor.textContent = 'Author: ' + book.author;
        bookAuthor.classList.add('book-author');

        bookPages.textContent = 'Pages: ' + book.pages;
        bookPages.classList.add('book-pages');

        checkbox.setAttribute('type', 'checkbox');
        checkbox.classList.add('read-checkbox')
        if(book.isRead){
            checkbox.checked = true;
        }else{
            checkbox.checked = false;
        }

        checkboxLabel.textContent = 'Finished';

        editButton.textContent = 'edit';
        editButton.classList.add('edit-btn');

        deleteButton.textContent = 'delete';
        deleteButton.classList.add('delete-btn');

        console.log(bookCard);

        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(checkbox);
        bookCard.appendChild(checkboxLabel);
        bookCard.appendChild(editButton);
        bookCard.appendChild(deleteButton);
        bookContainer.appendChild(bookCard);
    }
}
