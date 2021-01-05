function addFavouriteBook(bookName){
    if ( !bookName.includes('Great')){
        favouriteBooks.push(bookName)
    }
    return favouriteBooks;
}

function printFavoriteBooks(){
    console.log(`favourite books: ${favoriteBooks.length}`);
    for(let bookName of favoriteBooks){
        console.log(bookName)
    }
}

var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// print out favorite books
printFavoriteBooks();