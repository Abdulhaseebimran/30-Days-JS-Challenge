// Day 8 - JS Challenge - ES6

// ********************** Task 1: template literals **********************

// task 1:

const userName = "Abdul Haseeb";
const userAge = 25;

const user = `My name is ${userName} and I am ${userAge} years old.`;
// console.log(user);

// Task 2: multi-line strings

const multiLineString = `Hello, I am Abdul Haseeb
and I am BS Computer Science student
at SMIU, Karachi. I am learning
JavaScript and React.js, vue.js, and Node.js.`;

// console.log(multiLineString);

// ********************* Task 2: Destructuring **********************

// task 3:

const destructureArrayNum = ["Abdul Haseeb", 25, "Karachi", "Pakistan"];

const [first, second] = destructureArrayNum;

console.log(first, second);

// task 4:

const Book = {
  title: "JavaScript",
  author: "Abdul Haseeb",
  price: 500,
  publisher: "Chai Code",
};

const { title, author } = Book;

console.log(title, author);

// ********************* Task 3: Spread and Rest Operator **********************

// task 5:

const fruits = ["Apple", "Banana", "Mango", "Orange"];

const newFruits = [...fruits, "Grapes", "Pineapple", "Peach"];

// console.log(newFruits);

// Task 6:

function sum(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

// console.log(sum(1, 2, 3, 4, 5));

// ********************* Task 4: Default Parameter **********************

// Task 7:

function defaultParameter(num1, num2 = 5) {
    return num1 + num2;
  }
  
  // console.log(defaultParameter(5));
  // console.log(defaultParameter(5, 10));
  
