let myLibrary = [];

let count = 0;

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return title + " by " + author + ", " + pages + ", " + read;
  }
}

const addBook = document.querySelector('.add-book');
addBook.addEventListener('click', (e) => {
  e.preventDefault();
 //take users input and store new book objects into an array
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementsByName('read');
  let readValue;

  for (i = 0; i < read.length; i++) {
    if (read[i].checked) {
      readValue = read[i].value;
    }
  }
 

  const book = new Book(title, author, pages, readValue);
  myLibrary.push(book);
  displayBookInLibrary(book);


  function displayBookInLibrary(book) {
    //loop through the array and display each book on the page.
    const bookContainer = document.querySelector('.books-container');

    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookContainer.appendChild(bookCard);

    const bookTitle = document.createElement('h3');
    bookTitle.textContent = `${myLibrary[count].title}`;
    bookCard.appendChild(bookTitle);

    const bookAuthor = document.createElement('h3');
    bookAuthor.textContent = `${myLibrary[count].author}`;
    bookCard.appendChild(bookAuthor);

    const bookPages = document.createElement('p');
    bookPages.textContent = `${myLibrary[count].pages}`;
    bookCard.appendChild(bookPages);

    const bookRead = document.createElement('p');
    bookRead.textContent = `${myLibrary[count].read}`;
    bookCard.appendChild(bookRead);

    count++;
  }
});








