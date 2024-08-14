// Day 14 JS Challenge - Classes

// Activity 1: Class Definition

// Task 1:

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let person1 = new Person('Abdul', 21);
let person2 = new Person('Haseeb', 30);

// person1.greet();
// person2.greet();

// Task 2: 

class AnotherPerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
    updatedAge(newAge) {
        this.age = newAge;
        console.log(`My age has been updated to ${this.age}`);
    }
}

let anotherPerson1 = new AnotherPerson('Abdul', 21);

// anotherPerson1.greet();
// anotherPerson1.updatedAge(22);


// Activity 2: Class Inheritance

// Task 3:

class Student extends Person {
    constructor(name, age, studentID) {
        super(name, age);
        this.studentID = studentID;
    }
    getStudentID() {
        return this.studentID;
    }
}

const student = new Student("Abdul Haseeb", 21, 9);

// console.log(student.getStudentID());

// Task 4: 

class Student1 extends Person {
    constructor(name, age, studentID) {
        super(name, age);
        this.studentID = studentID;
    }
    greet() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentID}.`;
    }

    getStudentID() {
        return this.studentID;
    }
}

const student1 = new Student1("Abdul", 21, 9);

// console.log(student1.greet());
// console.log(student1.getStudentID());

// Activity 3: Static methods and properties

// Task 5:

class Person3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old.`;
    }

    static genericGreeting() {
        return "Hello welcome to the world of classes!";
    }
}

console.log(Person3.genericGreeting());

// Task 6:

class Student2 {
    static totalStudents = 0;

    constructor(name, age, studentID) {
        this.name = name;
        this.age = age;
        this.studentID = studentID;
        Student2.totalStudents++;
    }
    stdInfo() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentID}.`;
    }
}

const student3 = new Student2("Abdul", 21, 9);
const student4 = new Student2("Haseeb", 22, 9);
const student5 = new Student2("Hello", 99, 2);

const totalStudent = Student2.totalStudents;

// console.log("Total number of student are " + totalStudent); // total student are 3

// Activity 4: Getters and Setters

// Task 7:

class Person4 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name) {
        const [firstName, lastName] = name.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const newPerson = new Person4("Abdul", "Haseeb");
// console.log(`the person fullname are ${newPerson.fullName}`); // Abdul Haseeb

// Task 8: 

const anotherPerson = new Person4("John", "Doe");
// console.log(anotherPerson.fullName);

anotherPerson.fullName = "Abdul Haseeb";
// console.log(anotherPerson.fullName);

// Activity 5: Private fields(optional)

// Task 9:

class Account {
    // private field balance;
    #balance;

    constructor(initalBalance = 0) {
        this.#balance = initalBalance;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be positive.");
        }
        this.#balance += amount;
        console.log(`Deposited $${amount}. New balance is $${this.#balance}.`);
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be positive.");
        }
        if (amount > this.#balance) {
            throw new Error("Insufficient Funds");
        }
        this.#balance -= amount;
        console.log(`Withdrew $${amount}. New balance is $${this.#balance}.`);

    }

    getBalance(){
        return this.#balance;
    }
}

const myAccount = new Account(1000);
myAccount.deposit(200);
myAccount.withdraw(100);

// console.log(`Current Balance: ${myAccount.getBalance()}`);

// Task 10:

class Account1 {
    #balance;
  
    constructor(initialBalance) {
      if (initialBalance < 0) {
        throw new Error("Initial balance cannot be negative.");
      }
      this.#balance = initialBalance;
    }
  
    deposit(amount) {
      if (amount <= 0) {
        throw new Error("Deposit amount must be positive.");
      }
      this.#balance += amount;
      console.log(`Deposited $${amount}. New balance is $${this.#balance}.`);
    }
  
    withdraw(amount) {
      if (amount <= 0) {
        throw new Error("Withdrawal amount must be positive.");
      }
      if (amount > this.#balance) {
        throw new Error("Insufficient funds.");
      }
      this.#balance -= amount;
      console.log(`Withdrew $${amount}. New balance is $${this.#balance}.`);
    }
  
    getBalance() {
      return this.#balance;
    }
  }

const myAccount1 = new Account1(2000);

console.log(`Initial balance: $${myAccount1.getBalance()}`);

myAccount1.deposit(200);

console.log(`Balance after deposit: $${myAccount1.getBalance()}`);
console.log(`Balance after withdrawal: $${myAccount1.getBalance()}`);

myAccount1.deposit(300);
console.log(`Balance after another deposit: $${myAccount1.getBalance()}`);

myAccount1.withdraw(100);
console.log(`Balance after another withdrawal: $${myAccount1.getBalance()}`);