// Activity 1

// Task 2: Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

const person = {
    name: 'Abdul',
    age: 22,
    greet: function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
    hobbies: ['Reading', 'Coding', 'Gaming'],
    showHobbies: function () {
        console.log(`My hobbies are: ${this.hobbies.join(', ')}`);
    },
    introduce: function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. My hobbies are: ${this.hobbies.join(', ')}`);
    }
}

export default person;