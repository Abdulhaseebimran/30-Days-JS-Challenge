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

// Task 3: Removing elements.

// 5: Select an HTML element and remove it from the DOM 

const removeElements = () => {
    const createElement = document.createElement("div");
    
    createElement.textContent = "hello I am a new div to remove.";
    // console.log(createElement);
    document.body.appendChild(createElement);

    createElement.remove();
}

removeElements();

// 6:  Remove the last child of a specific HTML element

const removeLastChild = () => {
    const list = document.querySelector(".fruits");

    // console.log(list);

    list.lastChild.remove(); // remove Apple from li list.
}

removeLastChild();


// Task 4: Modifying elements and Classes.


// 7: Select an HTML element and change one of its attributes (eg : src of an img tag ).


const imgElement = () => {
    const img = document.querySelector(".image");

    img.src = "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png";
    img.alt = "Google Logo";
    img.style.width = "100px";
    img.style.height = "50px";

}

imgElement();


// 8: Add and remove a css class to and from an html elements 

const elementChanging = () => {
    const newPara = document.querySelector(".para");
    newPara.classList.add("newParagraph");
    newPara.classList.remove("para");

    console.log(newPara);

}

elementChanging();


// Task 5: Event Handling.

// 9: Add a click event listener to the button that changes the text content of paragraph

const eventChangetext = () => {
    const para = document.querySelector(".haseeb");
    const changeText = document.querySelector(".changeText");
 
    const handleClick = () => {
        para.textContent = "I am a software developer";
    }

    changeText.addEventListener("click", handleClick);
}

eventChangetext();

// 10: Add a mouseover event listener to an element that changes its border color . 


const eventMouseOver = () => {
    const mouseover = document.querySelector(".mouseover");

    const handleMouseOver = () => {
        mouseover.style.border = "2px solid red";
    }

    mouseover.addEventListener("mouseover", handleMouseOver);
}

eventMouseOver();