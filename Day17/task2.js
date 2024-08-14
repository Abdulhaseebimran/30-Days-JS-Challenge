// Task 2:

// Define the Node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Define the LinkedList class
class LinkedList {
  constructor() {
    this.head = null; // The head (first node) of the linked list
  }
}

// Method to add a new node to the linked list

LinkedList.prototype.add = function(value) {
    const newNode = new Node(value);
    if (this.head === null) {
        this.head = newNode;
    } else {
        let current = this.head;
        while (current.next !== null) {
        current = current.next;
        }
        current.next = newNode;
    }
}

// Methods to remove a node to the end of the list.
LinkedList.prototype.remove = function() {
    if (this.head !== null) {
        return null;
    }

    if (this.head.next === null) {
        const value = this.head.value;
        this.head = null;
        return value;
    } 

    let current = this.head;
    while (current.next.next !== null) {
        current = current.next;
    }
    const value = current.next.value;
    current.next = null;
    return value;
}

// Method to display the linked list

LinkedList.prototype.display = function() {
    let current = this.head;
    while (current !== null) {
        console.log(current.value);
        current = current.next;
    }
}

const task = new LinkedList();
task.add("Buy groceries");
task.add("Do laundry");
task.add("Clean the house");

console.log(`\nDisplaying the linked list:`);
task.display();

console.log(`\nRemoving the last node:`);
task.remove();

console.log(`\nDisplaying the linked list after removing the last node:`);
task.display();