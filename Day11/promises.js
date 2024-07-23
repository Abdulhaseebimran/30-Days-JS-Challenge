// Day 11 - Promises - JS Challenges

// Task 1: understanding promises

// 1: Create a promise that resolves with a message after a 2 second timeout and log the message to the console.

const promises = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved after 2 seconds");
  }, 2000);
});

promises.then((message) => {
  console.log(message);
});

// 2: create a promise that rejects with an error message after a 2 second timeout handle the error using `.catch()`.

const promises2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise rejected after 2 seconds");
  }, 2000);
});

promises2.then((res) => console.log(res)).catch((err) => console.log(err));

// Task 2: Chaining Promises.

// 3: create a sequence of promises that simulate fetcing data from a server.Chain the promises to log message in a specific order.

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => console.log(`data: ${data}`))
  .catch((err) => console.log(`Failed to fetch data: ${err}`));

