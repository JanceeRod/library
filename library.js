class Book {
    constructor(title, author, pages,isRead) {
        this.title = title
        this.author = author
        this.pages = pages
        this.isRead = isRead
    }
}

class Library {
    constructor() {
        this.books = []
        this.popupModal = document.querySelector('.modal')
        this.addBookButton = document.querySelector('.add-book-button')
        this.modalForm = document.querySelector('.form')
        this.booksGrid = document.querySelector('.books-grid')

        this.addBookButton.addEventListener('click', () => {
            this.popupModal.showModal()
        })

        this.booksGrid.addEventListener('click', (event) => {
            if (event.target.classList.contains('remove-book')) {
                this.removeBook(event.target)
            } else if (event.target.classList.contains('read') || event.target.classList.contains('read-clicked')) {
                this.toggleReadStatus(event.target)
            }
        });

        this.modalForm.addEventListener('submit', (event) => {
            event.preventDefault();
            this.addBook();
        });
    }
}