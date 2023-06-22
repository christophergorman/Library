

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    render();
}

function render() {
    let libraryEL = document.querySelector('#library');
    libraryEL.innerHTML = "";
    for(let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];
        let bookEL = document.createElement("div");
        bookEL.setAttribute('class', 'book-card');
        bookEL.innerHTML = `
        <div class='card-header'>
            <h3 class='title'>${book.title}</h3>
            <h5 class='author'> by ${book.author}</h5>
        </div>
        <div class='card-body'>
            <p>${book.pages} pages</p>
            <p class='read-status'>${book.read ? "Read" : "Not Read Yet"}</p>
            <button class='remove-button' onclick='removeBook(${i})'>Remove</button>
            <button class="toggle-button" onclick='toggleRead(${i})'>Toggle Read</button>
        </div>
        `;
        libraryEL.appendChild(bookEL);
    }
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    render();
}

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render();
}

let newBookbtn = document.querySelector("#new-book-btn");
newBookbtn.addEventListener("click", function() {
    let newBookForm = document.querySelector("#new-book-form");
    newBookForm.style.display = "flex";
});

document.querySelector("#new-book-form").addEventListener("submit", function(event) {
    event.preventDefault();
    addBookToLibrary();
})