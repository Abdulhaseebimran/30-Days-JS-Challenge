// Day 3 of javasctipt challenge

// ************************** Task 1: IF else statement**************************

// 1. write a program to check the number is positive or negative or zero and console the result.

let number = 0;

if (number > 0) {
  console.log("The number is positive", number);
} else if (number < 0) {
  console.log("The number is negative", number);
} else {
  console.log("The number is zero", number);
}

// 2. write a program to check if person is eligible to vote or not (Age >= 18) and console the result.

let personAge = 18;

if (personAge >= 18) {
  console.log("The person is eligible to vote", personAge);
} else if (personAge < 18) {
  console.log("The person is not eligible to vote", personAge);
} else {
  console.log("Invalid input", personAge);
}

// ******************** Task 2: Nested IF else statement **************************

// 3. write a program to find the largest of three number with nested if else statement.

let num1 = 10;
let num2 = 20;
let num3 = 30;

if (num1 > num2) {
  if (num1 > num3) {
    console.log("1st The largest number is: ", num1);
  } else {
    console.log("1st The largest number is: ", num3);
  }
} else {
  if (num2 > num3) {
    console.log("2nd The largest number is: ", num2);
  } else {
    console.log("2nd The largest number is: ", num3);
  }
}

// ***********************  Task 3: Switch statement **************************

// 4. switch case week of the number (1 - 7) and console the result.

let week = 1;

switch (week) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid input");
    break;
}

// 5. switch case assign the grade (A, B,C ,D ,E, F) based on the score and console the result.

let score = 60;

switch (true) {
  case score >= 90 && score <= 100:
    console.log("Grade A");
    break;
  case score >= 80 && score < 90:
    console.log("Grade B");
    break;
  case score >= 70 && score < 80:
    console.log("Grade C");
    break;
  case score >= 60 && score < 70:
    console.log("Grade D");
    break;
  case score >= 50 && score < 60:
    console.log("Grade E");
    break;
  default:
    console.log("Grade F");
    break;
}

// **************************** Task 4: conditional (Ternary) operator **************************

// 6. ternary operator to check the number is even or odd and console the result.

let num4 = 5;

let result = num4 % 2 === 0 ? "Even" : "odd";
console.log("The given number is: " + result);

// ************************* Task 5: combining conditions **************************

// 7. check leap year using multiple conditions (divisible by 4, 100, 400) and console the result.

let year = 2022;

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log("The year is leap year", year);
    } else {
      console.log("The year is not leap year", year);
    }
  } else {
    console.log("The year is leap year", year);
  }
} else {
  console.log("The year is not leap year", year);
}
