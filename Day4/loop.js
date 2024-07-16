// Day 4 JS challenge - Loops

// **************************** Task 1 : for Loop ****************************

// 1. print numbers from 1 to 10 using for loop

for (let i = 1; i <=10; i++){
    // console.log("Number is: ", i);
}

// 2. print multiplication table of 5 using for loop

let num = 5;

for (let i = 1; i <=10; i++){
    // console.log("Multiplication of 5 using for loops: ", num);
    // console.log(num, " * ", i, " = ", num * i);
}

// *********************** Task 2 : while Loop ******************************

// 3. calculate the sum of num from 1 to 10 using while loop

let sum = 0;

let i = 1;

while (i <= 10) {
    sum += i;
    i++;
}

console.log("sum of number 1 to 10: " + sum);

// 4. print number from 10 to 1 using while loop

//reverse order
let j = 10;

while ( j >= 1){
    console.log(j); 
    j--;
}


