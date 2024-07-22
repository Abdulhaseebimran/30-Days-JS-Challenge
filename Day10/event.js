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


