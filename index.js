let buttonState;
let button = document.getElementById('think');
let books = document.getElementsByClassName('book');

button.style.background = 'blue';

for (let i=0; i < books.length; i++) {
  books[i].style.background = 'blue';
}

button.addEventListener("click", (event) => {
  alert("Bazinga!");
});