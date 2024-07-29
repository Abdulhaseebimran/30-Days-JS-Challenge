// Day 12 - JS challenge - Error Handling   

// ******************** Task 1: Basic error handling and try-catch block ********************

// 1: Write a function that intentionally thrwos an error and use a try-catch block to handle the error and lov an appropriate message to the console.

function throwError (){
    let a = 10;
    let b = 20;
    try {
        if(typeof a!== 'number'){
            console.log(`${a} is not a number. It's type is ${typeof a}`);
        }else if(typeof b!== 'number'){
            console.log(`${b} is not a number. It's type is ${typeof b}`);
        }else{
            console.log(`The result of a / b: ` + a/b);
        }
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

// throwError();

// 2: Create a function that divides two numbers and throws an error if the denominator is zero . Use a try-catch block to handle this error .

function divideNumbers (a, b){
    try {
        if(b === 0){
            throw new Error('Denominator cannot be zero');
        }else{
            console.log(`The result of a / b: ` + a/b);
        }
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

// divideNumbers(10, 0);
// divideNumbers(10, 2);

// ******************** Task 2: FInally Block ********************

// 3: Write a script that includes a try-catch block and finally block . Log messages in the try,catch and finally blocks and observe the execution flow .

function tryCatchFinally (){
    let a = 10;
    let b = 20;

    try {
        if(typeof a!== 'number'){
            console.log(`${a} is not a number. It's type is ${typeof a}`);
        }else if(typeof b!== 'number'){
            console.log(`${b} is not a number. It's type is ${typeof b}`);
        }else{
            console.log(`The result of a / b: ` + a/b);
        }
    } catch (error) {
        console.log(`Error: ${error.message}`);
}
    finally{
        console.log('Finally block executed');
    }
}

// tryCatchFinally();