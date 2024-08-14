// Day 19 - Regualr Expression

// Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "Javascript" in a string.)

const text = 'Hello, I am a JavaScript Developer';

const pattern = /JavaScript/g;
const matches = text.match(pattern);

// console.log(matches);

// Task 2: Write a regular expression to match all digits in a string.

const text1 = "In 2013, I run 30 Days of Python. Now, in 2024 I super exited to start 30 Days of JavaScript.";

const pattern1 = /\d+/g;
const matches1 = text1.match(pattern1);

console.log(matches1);


// Activity 2: Character Classes and Quantifiers

// Task 3: Write a regular expression to match all words in a string that start with a captial letter.

const text2 = 'Hello, I am a JavaScript Developer and I am super excited to start 30 Days Of JavaScript. 2024 is a great year.';

const capitalPattern = /\b[A-Z][a-z]+\b/g;
const capitalMatches = text2.match(capitalPattern);

console.log(capitalMatches);

// Task 4: Write a regular expression to match all sequences of one or more digits in a string.

const text3 = 'In 2019, I run 30 Days of Python. Now, in 2024 I super exited to start 30 Days of JavaScript.';

const pattern3 = /\d+/g;
const matches3 = text3.match(pattern3);

console.log(matches3);

// Activity 3: Grouping and Capturing

// Task 5: matches area code, central office code, and line number.

const phoneNumber = 'Phone numbers: 555-666-7777, 555.666.7777, 5556667777, (555) 666-7777, 555 666 7777, 555-666-7777';

const pattern4 = /\(?\d{3}[-.) ]\d{3}[-. ]\d{4}/g;
const matches4 = phoneNumber.match(pattern4);

console.log(matches4);

// Task 6 : Write a regular expression to capture the username and domain from an email address.

const email = 'abdul123@gmail.com';

const pattern5 = /([^@]+)@([^@]+\.[a-zA-Z]{2,})/;

const matches5 = email.match(pattern5);

console.log(matches5);

// Activity 4: Assertions and Boundaries

// Task 7 : Write a regular expression to match a word only if it is at the beginning of a string.

const beginningWords = "Hello, Today I am Learning Regular Expression";

const pattern6 = /^\w+/g;

const matches6 = beginningWords.match(pattern6);

console.log(matches6);

// Task 8: Write a regular expression to match a word only if it is at the end of a string.

const endWords = "Hello, Today I am Learning Regular Expression";

const pattern7 = /\w+$/g;
const matches7 = endWords.match(pattern7);

console.log(matches7);

// Activity 5: Practical Application

// Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character).

const password = "P@ssw0rd123";

const pattern8 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const matches8 = pattern8.test(password);

if (matches8) {
    console.log('Password is valid');
    console.log(matches8);
}else {
    console.log('Password is invalid');
    // console.log(matches8);
}

// console.log(matches8);

// Task 10: Write a regular expression to validate a URL.

const url = "https://www.google.com";

const pattern9 = /^(https?:\/\/)?(www\.)?[\w-]+\.[a-z]{2,}(\.[a-z]{2,})?$/;

const matches9 = pattern9.test(url);

if (matches9) {
    console.log('URL is valid');
    console.log(matches9);
}
else {
    console.log('URL is invalid');
    // console.log(matches9);
}

// console.log(matches9);