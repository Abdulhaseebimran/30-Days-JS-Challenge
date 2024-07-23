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

// Task 3: Using Async/Await

// 4: Write an async function that awaits for a promise to resolve and then logs the resolved value.

async function asyncFunction() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log(data);
  }
  
  // asyncFunction();
  
  // 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
  
  async function asyncHandler() {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(`Failed to fetch data: ${err}`);
    }
  }
  
  // asyncHandler();
  
  // Task 4: Fetching Data from an API.
  
  // 6: /Write an async function that fetches data from an API and logs the data to the console.
  
  async function fetchData() {
    const res = await fetch("http://fakestoreapi.com/products");
    const data = await res.json();
    console.log(data);
  }
  
  // fetchData();
  
  // 7: Use the 'fetch' API to get data from a publuc API and log the response data to the console using async await.
  
  async function fetchAPI() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(`Fetch API Function Failed to fetch data: ${error}`);
    }
  }
  
  // fetchAPI();
  
