// Day 10 - Event Handling - JS Challenge

// Task 1: basic event handling

// 1: click event listener on button that changes the text of the button.

const para = document.querySelector(".para1");
const button = document.querySelector("#btn");

button.addEventListener("click", () => {
  para.innerHTML = "Button was Clicked";
});

// 2: add double click on event listener to an images that toggles it's visibility.

const img = document.querySelector(".img1");

img.addEventListener("dblclick", () => {
  img.classList.toggle("hide");
});

// Task 2: Mouse Events

// 3: Add a mouse event listener to an elements that changes is background color.

const div = document.querySelector("#change-div");

div.addEventListener("mouseover", () => {
  div.style.backgroundColor = "red";
});

// 4: Add a mouse out event listener to an element that changes it's background color.

div.addEventListener("mouseout", () => {
  div.style.backgroundColor = "white";
});

// Task 3: Keyboard Events

// 5: add a keydown event listener to an input field that log the value to the console.

const input1 = document.querySelector(".input-1");

input1.addEventListener("keydown", (e) => {
  console.log(input1.value, e.key);
});

// 6: Add a keyup event listener to an input filed that displays the current value in a paragraph.

const input2 = document.querySelector(".input-2");
const displayPara = document.querySelector("#displayPara");

input2.addEventListener("keyup", (e) => {
  displayPara.innerHTML = input2.value;
});

// Task 4: Form Events

// 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console

const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form); // get form data
  const data = Object.fromEntries(formData.entries()); // convert form data to object
  console.log(data);
});

// 8: Add a change event listener to a select dropdown that displays the sleceted value in a paragragh.

const selectDropdown = document.querySelector("#mySelect");
const para2 = document.querySelector("#para2");

selectDropdown.addEventListener("change", (e) => {
  para2.textContent = "I am from : " + selectDropdown.value;
});


