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

const books = new Stack();

// Add books to the stack
books.push("The Great Gatsby");
books.push("To Kill a Mockingbird");
books.push("1984");

// View the top book
console.log("PEEK METHOD "+ books.peek());

// Remove the top book
console.log("POP METHOD " + books.pop());

// View the top book after popping
console.log("PEEK METHOD " + books.peek());

// displaay the all book in library
console.log("DISPLAY STACK: " + books.displayStack());

// checking if the stack isEmpty or not
// console.log("CHECKING ISEMPTY: " + books.isEmpty);
