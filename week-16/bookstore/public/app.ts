const BASE_URL = "http://localhost:3000";

let booksArray = [];

function getBooks() {
  return fetch(`${BASE_URL}/books`)
    .then((resp) => resp.json())
    .then((books) => books)
    .catch((err) => console.log("Err", err));
}

getBooks().then((books) => {
  console.log(books);

  for (let i = 0; i < books.books.length; i++) {
    let newLine = document.createElement("tr");

    newLine.appendChild(createCellElement(`${books.books[i].book_name}`));
    newLine.appendChild(createCellElement(`${books.books[i].aut_name}`));
    newLine.appendChild(createCellElement(`${books.books[i].cate_descrip}`));
    newLine.appendChild(createCellElement(`${books.books[i].pub_name}`));
    newLine.appendChild(createCellElement(`${books.books[i].book_price}`));

    document.querySelector("table")?.appendChild(newLine);
  }
});

function createCellElement(value: string): HTMLTableCellElement {
  const td = document.createElement("td");
  td.innerText = value;
  return td;
}
