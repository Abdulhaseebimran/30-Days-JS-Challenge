// Day 5: JS challenge - Functions

//*************************** Task 1: function declaration ***************************

// 1.function to check if a number is even or odd and console the result.

function evenOrOdd (num){
    if (num % 2 === 0) {
        console.log(`${num} is even`);
    }else{
        console.log(`${num} is odd`);
    }
}

// evenOrOdd(10); 

// 2. function to calculate the square of a number and return the result.

function square (num){
      return num * num;
}

console.log(square(2));

// ********************************* Task 2: function expression *********************************

// 3. function expression to find the maximum of two numbers and return the result.

function maxOfTwoNum (a, b){
    if (a > b){
        return `The maximum number is ${a}`;
    }else if(b > a){
        return `The maximum number is ${b}`;
    }else{
        return 'Both numbers are equal';
    }
}

// console.log(maxOfTwoNum(10, 20));
// console.log(maxOfTwoNum(20, 10));
// console.log(maxOfTwoNum(10, 10));

// 4. function expression to concatenate two string and return the result.

function concatString (str1, str2){
    return str1 + " " + str2;
}

// console.log(concatString('Hello', 'World'));
// console.log(concatString('Good', 'Morning'));
// console.log(concatString('Abdul', 'Haseeb'));

// ********************************* Task 3: Arrow function *********************************

// 5. arrow function to calculate the sum of two numbers and return the result.

const sumOfTwoNum = (a, b) => {
    return a + b;
}

// console.log(sumOfTwoNum(10, 20));
// console.log(sumOfTwoNum(20, 30));

// 6. arrow functions to check if a string contain specific character and return the boolean result.

const checkChar = (str, char) => {
    if (str.includes(char)){
        return true;
    }else{
        return false;
    }
}

// console.log(checkChar('Hello', 'e'));
// console.log(checkChar('World', 'w'));


// ************************** Task 4: function with default parameter **************************

