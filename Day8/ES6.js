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

