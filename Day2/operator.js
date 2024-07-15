// Day 2: Operators in JS

// ************************ Task 1 Airthmetic Operators ************************

// 1. add Two numbers and console the result

let a = 10;
let b = 20;
let result = a + b;
console.log("Addition of two numbers is: ", result);

// 2. subtract two numbers and console the result

let c = 20;
let d = 10;
let result1 = c - d;
console.log("Subtraction of two numbers is: ", result1);

// 3. multiply two numbers and console the result

let result2 = a * b; // 10 * 20 = 200

console.log("Multiplication of two numbers is: ", result2);

// 4. divide two numbers and console the result

let result3 =  c / d;

console.log("Division of two numbers is: ", result3);

// 5. find the remainder when one number is divided by other and console the result

let result4 = c % d;
console.log("Remainder of two numbers is: ", result4);


// ************************ Task 2 Assignment Operators ************************

// 6. use the += to add two numbers and console the result

let result5 = 10;

result5 += a; // result5 = result5 + a; // 0 + 10 = 10

console.log("Addition of two numbers is: ", result5);

// 7. use the -= to subtract two numbers and console the result

let result6 = 20;

result6 -= a; // result6 = result6 - a; // 20 - 10 = 10

console.log("Subtraction of two numbers is: ", result6);

// ************************ Task 3 Comparison Operators ************************

// 8. compare two numbers using == and === and console the result

let num1 = 10;
let num2 = "10";

console.log("== operator: ", num1 == num2); // true
console.log("=== operator: ", num1 === num2); // false

// 9. compare two numbers using >= and <= and console the result

let num3 = 10;
let num4 = 20;

console.log(">= operator: ", num3 >= num4); // false
console.log("<= operator: ", num3 <= num4); // true

// 10. compare two numbers using > and < and console the result

console.log("> operator: ", num3 > num4); // false
console.log("< operator: ", num3 < num4); // true

// ************************ Task 4 Logical Operators ************************

// 11. write a program that uses the && operator to combine the two conditions and console the result

let condition1 = true;
let condition2 = false;

console.log("&& operator: ", condition1 && condition2); // false

// 12. write a program that uses the || operator to combine the two conditions and console the result

console.log("|| operator: ", condition1 || condition2); // true

// 13. write a program that uses the ! operator to reverse the result and console the result

console.log("! operator: ", !condition1); // false
console.log("! operator: ", !condition2); // true

// ************************ Task 5 Ternary Operators ************************

// 14. write a program that uses the ternary operator to console the result based on the condition

let num5 = 5;

let result7 = num5 > 10 ? true : false;

if (result7 === true) {
    console.log("Number is greater than 10");
} else {
    console.log("Number is less than 10");
}

// ************************ Day 2 complete ************************

