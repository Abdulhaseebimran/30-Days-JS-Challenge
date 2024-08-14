// Day 15 JS challenge - Closures

// Activity 1: understanding closures

// Task 1:

function scoreTracker(playerName) {
    let score = 0;
    return function (points) {
        score += points;

        return `${playerName} has scored ${score} points`;
    };
}

const myScore = scoreTracker("Abdul Haseeb");
// console.log(myScore(10));
// console.log(myScore(20));

// Task 2:

function createCounter() {
    let counter = 0;
    function privateCounter() {
        function increment() {
            counter++;
            console.log(counter); // 1
        }
        function getCounterValue() {
            console.log(counter); //1
        }
        increment();
        getCounterValue();
        increment(); // 2
    }
    return privateCounter;
}

const counter = createCounter();
// counter();

// Activity 2: Practical Closures

// Task 3:

function uniqueIdGenerator() {
    let lastID = Math.floor(Math.random() * 100) + 1;
    return function () {
        const currentID = lastID;
        lastID++;
        return `ID: ${currentID}`;
    };
}

const generateID = uniqueIdGenerator();
// console.log(generateID());

// Task 4:

function createGreeting(userName) {
    return function () {
        let currentHour = new Date().getHours();
        let greeting = "";
        if (currentHour >= 0 && currentHour < 12) {
            greeting = "Good Morning";
        } else if (currentHour >= 12 && currentHour < 17) {
            greeting = "Good Afternoon";
        } else {
            greeting = "Good Evening";
        }
        return `${greeting} ${userName}`;
    };
}

const greetUser = createGreeting("Abdul Haseeb");
// console.log(greetUser());

// Activity 3: Closures in loops

// Task 5:

let arr = [];

for (var i = 0; i < 5; i++) {
    arr.push(
        (function () {
            return function () {
                console.log(i);
            };
        })(i)
    );
}

// arr[0](); // 5
// arr[1](); // 5

// Activity 4: Module Pattern

// Task 6:

function createLibrary() {
    let books = [];
    return {
        addBook: function (book) {
            books.push(book);
            console.log("Book added successfully" + book);
        },
        removeBook: function (book) {
            books = books.filter(function (b) {
                return b !== book;
            });
            console.log("Book removed successfully");
        },
        listBook: function () {
            if (books.length > 0) {
                console.log(`Books in the library are: ${books}`);
                books.forEach((book, index) => {
                    console.log(`${index + 1}. ${book}`);
                });
            } else {
                console.log("No books in the library");
            }
        },
    };
}

const library = createLibrary();
// library.addBook("The Alchemist");
// library.addBook("The Monk who sold his Ferrari");
// library.addBook("The Secret");

// library.listBook();

// library.removeBook("The Alchemist");

// library.listBook();

// Activity 5: Memorization

// Task 7:

const add = (a, b) => {
    return a + b;
};

function memoize(fun) {
    let previousResults = {};
    return function (...args) {
        let key = JSON.stringify(args);
        if (key in previousResults) {
            console.log(`You have done this before`);
            return previousResults[key];
        } else {
            let result = fun(...args);
            previousResults[key] = result;
            return result;
        }
    };
}

const memoizedAdd = memoize(add);
console.log(memoizedAdd(10, 1)); // 11
console.log(memoizedAdd(10, 2)); // 12

// Task 8:

function memoizeFactorial() {
    const cache = {};

    function factorial(n) {
        if (n <= 1) return 1;
        if (cache[n] !== undefined) {
            console.log(`You have done this before ${n}`);
            return cache[n];
        } else {
            cache[n] = n * factorial(n - 1);
            return cache[n];
        }
    }
    return factorial;
}

const memoizedFactorial = memoizeFactorial();
console.log(memoizedFactorial(5)); // 120
console.log(`Factorial of 10 is ${memoizedFactorial(10)}`); // 120



