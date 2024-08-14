// Task 4: reverse the string in stack

class Stack {
    constructor() {
        this.items = [];
    }
    // Method to add an element to the stack
    push(element) {
        this.items.push(element);
    }

    // Method to remove and return the top element of the stack
    pop() {
        if (this.items.length === 0) {
            return "Underflow";
        }
        return this.items.pop();
    }

    // Method to peek at the top of stack
    peek() {
        if (this.items.length === 0) {
            return "No Common Element in stack";
        }
        return this.items[this.items.length - 1];
    }

    // Method to check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Method to display the stack elements
    displayStack() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str.trim();
    }
}

function reverseString(str) {
    let stack = new Stack();
    // Push all characters of the string onto the stack
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }

    // Pop all characters from the stack and form the reversed string
    let reversedStr = "";
    while (!stack.isEmpty()) {
        reversedStr += stack.pop();
    }

    return reversedStr;
}

let originalStr = "Hello JavaScript";
let reverseStr = reverseString(originalStr);


console.log("Original string: " + originalStr);
console.log("Reverse string: " + reverseStr);
