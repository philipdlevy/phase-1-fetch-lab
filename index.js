function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books') //returning the fetch. WE are grabbing the info from the link
  .then(response => response.json()) // we take the info and do a .json on it to make the info readable. 
  .then(books => renderBooks(books)) //we take the info from what we did .json on, an array of objects, and puts it on the DOM and runs the functio below whcih does that work for us. 
}


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
