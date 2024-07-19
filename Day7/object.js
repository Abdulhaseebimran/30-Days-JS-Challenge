// Day 7 - JS Challenge - Object

// ********************** Task 1: object creations **********************

// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.

const book = {
    title: '30 Days of JavaScript',
    author: 'Hitesh Choudhary',
    year: 2024,
}

// console.log(book);
// console.log(book.title);
// console.log(book["year"]);

// Task 2: Access and log the title and author properties of the book object.

// console.log(`book ${JSON.stringify(book)}`);

// console.log(`The book title is ${book.title} and the author is ${book.author}`);

// ********************* Task 2: object methods **********************

// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

book.getBookInfo = function () {
    return `${this.title} by ${this.author}`;
}

// console.log(book);
// console.log(book.getBookInfo());

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

book.updateYear = function (year) {
    this.year = year;
}

book.updateYear(2025);

// console.log(`book ${JSON.stringify(book.year)}`);

// ********************* Task 3: Nested Objects **********************

// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

const library = {
    name: "Abdul's Library",
    books: [
        book,
        {
            title: "JavaScript for Beginners",
            author: "John Doe",
            year: 2022,
        },
        {
            title: "Python for Beginners",
            author: "Steve Smith",
            year: 2021,
        },
        {
            title: "Java for Beginners",
            author: "Harry Potter",
            year: 2020,
        },
        {
            title: "React.js for Beginners",
            author: "Chai code",
            year: 2019,
        }
    ]
}

// console.log(`library ${JSON.stringify(library)}`);

// Task 6: Access and log the name of the library and the titles of all the books in the library.

let libraryName = library.name;

// console.log(`The library name is ${libraryName}`);

let bookTitle = library.books.map(book => book.title);

// console.log(`The books in the library are ${bookTitle.join(", ")}`);

