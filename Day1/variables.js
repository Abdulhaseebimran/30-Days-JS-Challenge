// 30 Days JavaScript Challenge
// Day 1: Variables

// task 1: variables declaration with var and let

var age = 20;
console.log("your age is: " + age);

let firstName = "Abdul Haseeb";
console.log("your first name is: " + firstName);

// **************************** task 2: variables declaration with const ****************************

const isAgeVaild = true;
console.log("is age valid: " + isAgeVaild);

const isNameValid = true;
console.log("is name valid: " + isNameValid);

// **************************** task 3: different data types ****************************

// Number
const PI = 3.14;
console.log("value of PI: " + PI);
console.log("data type of PI: " + typeof PI);

// string

const name = "Abdul Haseeb";
console.log(`my name is: ${name} and types is: ${typeof name}`);

// boolean

const isNameTrue = true;
console.log(`is name true: ${isNameTrue} and type is: ${typeof isNameTrue}`);

// array

const Cities = ["Karachi", "Lahore", "Islamabad"];
console.log(`cities are: ${Cities} and type is: ${typeof Cities}`);

// object

const CarsObj = {
    name: "Audi",
    model: "A4",
    year: 2020
};

console.log(`CarsObject type is: ${typeof CarsObj}`);
// console.log(CarsObj["name"]);

// **************************** task 4: declare let variable and reassign value ****************************

let age1 = 20;
console.log("your age is: " + age1);

age1 = 21; // reassign value to age1 
console.log("Your updated age is: " + age1); // 21

// **************************** task 5: declare const variable and try to reassign value ****************************

const friendName = "Ammar";

// friendName = "Ali"; // this will give error because we can't reassign value to const variable
console.log("your friend name is: " + friendName); // Ammar

// **************************** task 6: features request variable types and console.log() ****************************

console.log(`name is: ${name} and type is: ${typeof name}`);

console.log(`age is: ${age} and type is: ${typeof age}`);

console.log(`isNameTrue is: ${isNameTrue} and type is: ${typeof isNameTrue}`);

console.log(`Cities are: ${Cities} and type is: ${typeof Cities}`);

console.log(`CarsObject is: ${CarsObj["name"]} and type is: ${typeof CarsObj}`);

// **************************** Day 1 complete ****************************

