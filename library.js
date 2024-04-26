const popupModal = document.querySelector('.modal')
const addBookButton = document.querySelector('.add-book-button')

const readButtons =  document.querySelectorAll('.read')

addBookButton.addEventListener('click', () => {
    popupModal.showModal()
})

readButtons.forEach(button => {
    button.addEventListener('click', () => {
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
    });
});