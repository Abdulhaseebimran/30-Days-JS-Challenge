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
