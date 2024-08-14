// Task 6: Queue

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

function simplePrinterQueue(){
    let printerQueue = new Queue();

    // Add print jobs to the queue
  printerQueue.enQueue("Print Job 1: Abdul haseeb");
  printerQueue.enQueue("Print Job 2: Ammar");
  printerQueue.enQueue("Print Job 3:  Owais");

  // Process print jobs
  while (!printerQueue.isEmpty()) {
    console.log("Processing:", printerQueue.deQueue());
  }
}

simplePrinterQueue();