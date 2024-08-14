// Day 17 - JS Challenge - Data Structure

// Activity 1: Linked List

// Task 1:

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

// create nodes:
const task1 = new Node("Buy groceries");
const task2 = new Node("Do laundry");
const task3 = new Node("Clean the house");

// link the nodes together
task1.next = task2;
task2.next = task3;

// Function to traverse and print the linked list
function printLinkedList(head){
    let current = head;
    while (current !== null) {
        console.log(current.value);
        current = current.next;
    }
}

printLinkedList(task1);
printLinkedList(task2);