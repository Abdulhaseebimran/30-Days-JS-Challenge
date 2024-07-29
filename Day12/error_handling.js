// Day 12 - JS challenge - Error Handling

// ******************** Task 1: Basic error handling and try-catch block ********************

// 1: Write a function that intentionally thrwos an error and use a try-catch block to handle the error and lov an appropriate message to the console.

function throwError() {
  let a = 10;
  let b = 20;
  try {
    if (typeof a !== "number") {
      console.log(`${a} is not a number. It's type is ${typeof a}`);
    } else if (typeof b !== "number") {
      console.log(`${b} is not a number. It's type is ${typeof b}`);
    } else {
      console.log(`The result of a / b: ` + a / b);
    }
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}

// throwError();

// 2: Create a function that divides two numbers and throws an error if the denominator is zero . Use a try-catch block to handle this error .

function divideNumbers(a, b) {
  try {
    if (b === 0) {
      throw new Error("Denominator cannot be zero");
    } else {
      console.log(`The result of a / b: ` + a / b);
    }
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}

// divideNumbers(10, 0);
// divideNumbers(10, 2);

// ******************** Task 2: FInally Block ********************

// 3: Write a script that includes a try-catch block and finally block . Log messages in the try,catch and finally blocks and observe the execution flow .

function tryCatchFinally() {
  let a = 10;
  let b = 20;

  try {
    if (typeof a !== "number") {
      console.log(`${a} is not a number. It's type is ${typeof a}`);
    } else if (typeof b !== "number") {
      console.log(`${b} is not a number. It's type is ${typeof b}`);
    } else {
      console.log(`The result of a / b: ` + a / b);
    }
  } catch (error) {
    console.log(`Error: ${error.message}`);
  } finally {
    console.log("Finally block executed");
  }
}

// tryCatchFinally();

// ******************** Task 3:  Custom Error Objects ********************

// 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

function throwError() {
  try {
    throw new CustomError("This is a custom error");
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}

// throwError();

// 5:  Write a fucntion that validates user input (e.g. checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using try-catch block

function validateInput(input) {
  try {
    if (input === "") {
      throw new CustomError("Input cannot be empty");
    } else {
      console.log("Input is valid");
    }
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}

// validateInput('hello');
// validateInput('');
// validateInput(10);

// ******************** Task 4:  Error Handling in Promises ********************

// 6: Create a promise that randomly resolves or rejects. Use ".catch()" to handle the rejection and log an appropriate message to the console

function randomPromise() {
  return new Promise((resolve, reject) => {
    let random = Math.random();
    if (random > 0.5) {
      resolve("Promise resolved");
    } else {
      reject("Promise rejected");
    }
  });
}

randomPromise()
  .then((data) => console.log(data))
  .catch((error) => console.log(`Error: ${error}`));

// 7:  Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let randomNumber = Math.floor(Math.random() * 2);
      if (randomNumber === 0) resolve("Promise resolved");
      else reject(new Error("Promise rejected"));
    }, 1000);
  });

async function handlePromise() {
    try {
      const response = await newPromise;
      console.log(response);
    } catch (error) {
      console.log("ERROR :", error.message);
    }
  }

// handlePromise();

