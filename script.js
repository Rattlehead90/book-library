let myLibrary = [];
let table = document.querySelector('.table')

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    if (read === true) {
      return title + " by " + author + ", " + pages + ", not read yet"
    } else {
      return title + " by " + author + ", " + pages + ", read"
    }
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function addBookToTable(book) {
  const row = document.createElement('div');
  row.classList.add('data-row');
  const title = document.createElement('div');
  title.textContent = book.title;
  const author = document.createElement('div');
  author.textContent = book.author;
  const pages = document.createElement('div');
  pages.textContent = book.pages;
  const read = document.createElement('div');
  if (book.read === true) {
    read.textContent = "Read"
  } else {
    read.textContent = "Didn't read"
  }

  row.appendChild(title)
  row.appendChild(author)
  row.appendChild(pages)
  row.appendChild(read)

  table.appendChild(row)
}

const hobbit = new Book('The Hobbit', "J.R.R. Tolkien", 295, true);
const lolita = new Book('V.V.Nabokov', 'Lolita', 336, true)

addBookToLibrary(hobbit)
addBookToLibrary(lolita)

myLibrary.forEach(addBookToTable)