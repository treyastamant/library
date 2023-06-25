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

    const titleAuthorGroup = document.createElement('div');
    titleAuthorGroup.classList.add('title-author-group');
    bookCard.appendChild(titleAuthorGroup);

    const bookTitle = document.createElement('h3');
    bookTitle.textContent = `${myLibrary[count].title}`;
    titleAuthorGroup.appendChild(bookTitle);

    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = `by ${myLibrary[count].author}`;
    bookAuthor.classList.add('author');
    titleAuthorGroup.appendChild(bookAuthor);

    const pagesReadGroup = document.createElement('div');
    pagesReadGroup.classList.add('pages-read-group');
    bookCard.appendChild(pagesReadGroup);

    const bookPages = document.createElement('p');
    bookPages.textContent = `${myLibrary[count].pages} pages`;
    pagesReadGroup.appendChild(bookPages);

    if (myLibrary[count].read === "Not Read") {
      const markRead = document.createElement('button');
      markRead.textContent = `Mark Read`;
      markRead.classList.add('primary-button');
      pagesReadGroup.appendChild(markRead);
    } else {
      const bookRead = document.createElement('p');
      bookRead.innerHTML = `<span class="material-symbols-outlined">
      check_circle
      </span> ${myLibrary[count].read}`;
      pagesReadGroup.appendChild(bookRead);
    }

    const deleteBook = document.createElement('button');
    deleteBook.textContent = `Delete`;
    deleteBook.classList.add('delete');
    bookCard.appendChild(deleteBook);


    count++;
  }
});








