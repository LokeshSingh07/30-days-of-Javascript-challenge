// Activity 1: Object Creation and Access
const book = {
    title: "Ikigai",
    author: "Francesc Miralles",
    year: "2016"
}
console.log(book);


const title = book.title;
const author = book.author;
console.log("title: ", title);
console.log("author: ", author);




// Activity 2: Object Methods
book.getTitleAuthor = function(){
    return `${this.title} by ${this.author}`;
}
console.log(book.getTitleAuthor());


book.updateYear = function(year){
    this.year = year;
}
book.updateYear(2017);
console.log(book);




// Activity 3: Nested Object
const library = {
    name: "A block",
    books: [
        {
            title: "Ikigai",
            author: "Francesc Miralles",
            year: "2016"
        },
        {
            title: "demon slayer",
            author: "Koyoharu Gotouge",
            year: "2016"
        },
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960
        },
    ]
}
console.log(library);


console.log("Library name: ", library.name);
console.log("Book title: ");
library.books.forEach((book) => {
    process.stdout.write(book.title + ", ");
});
console.log("\n");



// Activty 4: The this keyword
book.getTitleYear = function(){
    return `${this.title} -> ${this.year}`
}
console.log(book.getTitleYear());




// Activity 5: Object iteration
console.log("");
for(let property in book){
    console.log(`${property} : ${book[property]}`);
}


const keys = Object.keys(book);
const values = Object.values(book);
console.log("Keys : ", keys);
console.log("Values  : ", values);