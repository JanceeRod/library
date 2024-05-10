class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
}

class Library {
    constructor() {
        this.books = [];
        this.popupModal = document.querySelector('.modal');
        this.addBookButton = document.querySelector('.add-book-button');
        this.modalForm = document.querySelector('.form');
        this.booksGrid = document.querySelector('.books-grid');

        this.addBookButton.addEventListener('click', () => {
            this.popupModal.showModal();
        });

        this.booksGrid.addEventListener('click', (event) => {
            if (event.target.classList.contains('remove-book')) {
                this.removeBook(event.target);
            } else if (event.target.classList.contains('read') || event.target.classList.contains('read-clicked')) {
                this.toggleReadStatus(event.target);
            }
        });

        this.modalForm.addEventListener('submit', (event) => {
            event.preventDefault();
            this.addBook();
        });
    }

    addBook() {
        const title = document.getElementById('book-title').value;
        const author = document.getElementById('book-author').value;
        const pages = document.getElementById('book-pages').value;
        const isRead = document.getElementById('book-read-status').checked;

        const newBook = new Book(title, author, pages, isRead);
        this.books.push(newBook);
        this.renderBook(newBook);
        this.modalForm.reset();
        this.popupModal.close();
    }

    removeBook(target) {
        const bookCard = target.closest('.book-card');
        const index = Array.from(bookCard.parentElement.children).indexOf(bookCard);
        this.books.splice(index, 1);
        bookCard.remove();
    }

    toggleReadStatus(target) {
        const button = target;
        button.classList.toggle('read');
        button.classList.toggle('read-clicked');
        
        if (button.textContent == "Have Read") {
            button.textContent = "Not Read";
        } else {
            button.textContent = "Have Read";
        }
    }    

    renderBook(book) {
        const newBookCard = document.createElement('div');
        newBookCard.classList.add('book-card');
        newBookCard.innerHTML = `
            <div class="detail">
                <h3 class="book-title">${book.title}</h3>
                <p class="author">${book.author}</p>
                <p class="pages">${book.pages} pages</p>
            </div>
            <div class="read-container">
                <div class="read-status">
                    <button class="${book.isRead ? 'read' : 'read-clicked'}">${book.isRead ? 'Have Read' : 'Not Read'}</button>
                    <button class="remove-book">Remove</button>
                </div>
            </div>
        `;
        this.booksGrid.appendChild(newBookCard);
    }
}

const library = new Library();