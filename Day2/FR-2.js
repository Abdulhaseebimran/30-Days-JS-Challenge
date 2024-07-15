// Comparision Logical Operation Scirpt: Create a script that compares two numbers using different comparison operators and combines condition using logical operators 

// marksheet of student

let marks = 60;

if (marks >= 90) {
    console.log("Grade A+");
} else if(marks < 90 && marks >=80){
    console.log("Grade A");
} else if(marks < 80 && marks >=70){
    console.log("Grade B");
} else if(marks < 70 && marks >=60){
    console.log("Grade C");
}else if(marks < 60 && marks >=50){
    console.log("Grade D");
}else{
    console.log("Fail");
}

// Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result 

let num = 10;
let result; // variable to store the result

result = (num > 0) ? "positive" : "negative";

console.log("Result" + " " + result);