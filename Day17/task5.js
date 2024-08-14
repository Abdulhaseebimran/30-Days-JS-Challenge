// Activity 3: Queue

// Task 5:

class Queue {
    constructor() {
        this.items = [];
    }

    // Add element in Queue
    enQueue(elements) {
        this.items.push(elements);
    }

    // Remove and return the front element from the queue
    deQueue() {
        if (this.items.length === 0) {
            return "Underflow"; // queue is empty or null
        }
        return this.items.shift();
    }

    // View the front element of the queue
    front() {
        if (this.items.length === 0) {
            return "No elements in Queue";
        }
        return this.items[0];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    printQueue(){
        return this.items.join(" ");
    }
}

const queue = new Queue();

queue.enQueue("Abdul");
queue.enQueue("Haseeb");
queue.enQueue("Imran");

// View the value customer
console.log(queue.front());

// Remove the value customer
console.log(queue.deQueue());

// View the first value after dequeuing
console.log(queue.front());

// Check if the queue is empty
console.log(queue.isEmpty());

// Print all value in the queue
console.log(queue.printQueue());