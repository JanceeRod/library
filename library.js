const popupModal = document.querySelector('.modal')
const addBookButton = document.querySelector('.add-book-button')

addBookButton.addEventListener('click', () => {
    popupModal.showModal()
})