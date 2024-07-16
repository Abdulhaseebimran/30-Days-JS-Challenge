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
    // console.log(j); 
    j--;
}

// **************************** Task 3 : do-while Loop *************************


// 5. print number form 1 to 5 using do-while loop

let k = 1;

do {
    // console.log(k);
    k++; // increment
} while (k <= 5);


// 6. program to calculate the factorial of a number using do-while loop

let number = 5;
let factorial = 1;

let l = 1;
do {
    factorial *= l;
    l++;
    // console.log("Factorial of a number: ", factorial);
} while (l <= number);

// *************************** Task 4 : Nested Loop ***************************

// 7. print the following pattern using nested loop

// *
// * *
// * * *
// * * * *
// * * * * *

for (let i = 1; i <= 5; i++){
     let pattern = " ";
     for (let j = 1; j <= i; j++){
         pattern += "* ";
     }
    //  console.log(pattern);
}


// ************************* Task 5: for loop with break ************************

// 8. print number from 1 to 10 using for loop but skip the loop after 5 using continue.

for (let i = 1; i <= 10; i++){
    if (i === 5) {
        continue;
    }
    // console.log(i);
}

// 9. print number from 1 to 10 using for loop but break the loop after 7 using break.


for (let i = 0; i <= 10; i++) {
   if (i === 7) {
      break;
   }

//    console.log(i);
}

// *********************************** Day 4: Task complete ***********************************