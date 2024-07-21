// Day 9 - JS challenge DOM manipulation

// Task 1: selecting and manipulating elements

// 1: 

let heading1 = document.getElementById("heading");

heading1.textContent = "Hello World";

// 2: Select an HTML element by a class and change its background color

const bgChange = () => {
    const bg = document.querySelector(".sub-heading");
    bg.style.backgroundColor = "red";
    bg.style.color = "white";
    bg.fontWeight = "bold";
    bg.fontSize = "20px";
}

bgChange();

