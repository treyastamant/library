let myLibrary = [];
let count = 0;

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openModalBtn = document.querySelector('.btn-open');
const closeModalBtn = document.querySelector('.btn-close');

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener("click", closeModal);

const addBook = document.querySelector('.add-book');
addBook.addEventListener('click', (e) => {
  e.preventDefault();
 //take users input and store new book objects into an array
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const pages = document.getElementById('pages');
  const read = document.getElementsByName('read');
  let readValue;

  for (i = 0; i < read.length; i++) {
    if (read[i].checked) {
      readValue = read[i].value;
    }
  }

  if (title.value.length === 0) {
    title.classList.add('invalid');
  }
  if (author.value.length === 0) {
    author.classList.add('invalid');
  } 
  if (pages.value.length === 0) {
    pages.classList.add('invalid');
  } else {
    const book = new Book(title.value, author.value, pages.value, readValue);
    myLibrary.push(book);
    displayBookInLibrary(book);
    closeModal();
    document.getElementById('form').reset();
  }
});

title.addEventListener('focus', () => {
  title.classList.remove('invalid');
});

author.addEventListener('focus', () => {
  author.classList.remove('invalid');
});

pages.addEventListener('focus', () => {
  pages.classList.remove('invalid');
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  // this.info = function() {
  //   return title + " by " + author + ", " + pages + ", " + read;
  // }
}

function displayBookInLibrary() {
  //Display new book on the page.
  const bookContainer = document.querySelector('.books-container');

  const bookCard = document.createElement('div');
  bookCard.classList.add('book-card');
  bookCard.setAttribute('data-num', count);
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

    markRead.addEventListener('click', () => {
      const bookCount = markRead.parentElement.parentElement.dataset.num;
      myLibrary[bookCount].read = "Read";
      
      //Delete 'Mark Read' button
      markRead.remove();

      //Show 'Read'
      const markBookRead = document.createElement('p');
      markBookRead.innerHTML = `<span class="material-symbols-outlined">
      check_circle
      </span> ${myLibrary[bookCount].read}`;
      pagesReadGroup.appendChild(markBookRead);
    })

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

  console.log(deleteBook);
  deleteBook.addEventListener('click', () => {
    deleteBook.parentElement.remove();
  });
}









