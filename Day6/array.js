// 30 days - Js challenge - Arrays

// **************************** Task 1: Arrays creation and access ****************************

// Task 1:

const numArr = [1,2,3,4,5];

console.log(numArr);
// console.log(numArr[0]);
// console.log(numArr["1"]);

// Task 2:

const firstElement = numArr[0];
console.log("first element of array: ",firstElement);

const lastElement = numArr[numArr.length-1];
console.log("Last Element of array: ",lastElement);

// ************************* Task 2: Arrays Methods Basic *****************************

// Task 3:

numArr.push(6); // add to end of array
console.log(numArr);

// Task 4:

numArr.pop(); // remove from end of array

console.log(numArr);

// Task 5:

numArr.shift(); // remove from start of array

console.log(numArr);

// Task 6:

numArr.unshift(0);

console.log(numArr);

// ************************* Task 3: Arrays Methods Intermediate *****************************

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.


const doubledArray = [0,1,2,3,4,5,6];


const doubledNum = doubledArray.map((num)=>{
    return num * 2;
});

console.log("Double number using map method: ",doubledNum);

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.

const filteredNum = doubledArray.filter((num) => {
      return num % 2 === 0;
});

console.log("Even numbers using filter method: ",filteredNum);


