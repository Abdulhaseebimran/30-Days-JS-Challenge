// Activity 4: Using Third-Party Modules

// Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.

import _ from 'lodash';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(_.chunk(arr, 2)); // [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]

console.log(_.shuffle(arr)); // [3, 1, 6, 2, 5, 4, 7, 8, 9, 10]

console.log(_.sum(arr)); // 55

console.log(_.mean(arr)); // 5.5

const exampleString = 'Hello, World!';

console.log(_.toUpper(exampleString)); // HELLO, WORLD!

console.log(_.toLower(exampleString)); // hello, world!

console.log(_.camelCase(exampleString)); // helloWorld