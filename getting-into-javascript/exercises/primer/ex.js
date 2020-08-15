// TODO: define addFavoriteBook(..) function
function addFavoriteBook(bookName) {
  let bookNameLower = bookName.toLowerCase();
  if (!bookNameLower.includes("great")) {
    favoriteBooks.push(bookName);
  }
}
// TODO: define printFavoriteBooks() function

var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// TODO: print out favorite books

console.log(favoriteBooks.join(", "));

function printFavoriteBooks() {
  console.log(`Favorite Books: ${favoriteBooks.length}`);
  for (let title of favoriteBooks) {
    console.log(title);
  }
}

printFavoriteBooks();
