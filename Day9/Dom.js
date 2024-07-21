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

// Task 2: Creating and Appending elements.

// 3: Create an new div element with some text content and append it to the body

const appendDiv = () => {
    const createDiv = document.createElement("div");

    createDiv.textContent = "I am a new div";
    console.log(createDiv);

    createDiv.style.fontSize = "20px";
    
    document.body.appendChild(createDiv);  // append div into the body.
}

appendDiv();

// 4: Create a new li element and add it to existing ul list 

const appendList = () => {
    const createUl = document.querySelector(".fruits");
    const fruits = document.createElement("li");

    fruits.textContent = "Apple";
    
    createUl.appendChild(fruits);
}

appendList();

