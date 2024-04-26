const popupModal = document.querySelector('.modal')
const addBookButton = document.querySelector('.add-book-button')
const readButtons =  document.querySelectorAll('.read')
const removeButtons = document.querySelectorAll('.remove-book')

const modalForm = document.querySelector('.form')
const booksGrid = document.querySelector('.books-grid');

addBookButton.addEventListener('click', () => {
    popupModal.showModal()
})

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-book')) {
        const bookCard = event.target.closest('.book-card');
        bookCard.remove();
    }
});

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('read') || event.target.classList.contains('read-clicked')) {
        const button = event.target;
        if (button.classList.contains('read')) {
            button.classList.remove('read');
            button.classList.add('read-clicked');
            button.textContent = 'Not Read'
        } else if (button.classList.contains('read-clicked')) {
            button.classList.remove('read-clicked');
            button.classList.add('read');
            button.textContent = 'Have Read'
        } else {
            button.classList.add('read');
        }
    }
});

modalForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const title = document.getElementById('book-title').value
    const author = document.getElementById('book-author').value
    const pages = document.getElementById('book-pages').value
    const isRead = document.getElementById('book-read-status').checked

    const newBookCard = document.createElement('div')
    newBookCard.classList.add('book-card')
    newBookCard.innerHTML = `
        <div class="detail">
            <h3 class="book-title">${title}</h3>
            <p class="author">${author}</p>
            <p class="pages">${pages} pages</p>
        </div>
        <div class="read-container">
            <div class="read-status">
                <button class="${isRead ? 'read' : 'read-clicked'}">${isRead ? 'Have Read' : 'Not Read'}</button>
                <button class="remove-book">Remove</button>
            </div>
        </div>
    `;

    booksGrid.appendChild(newBookCard)
    modalForm.reset()
    
    const popupModal = document.querySelector('.modal')
    popupModal.close()
})