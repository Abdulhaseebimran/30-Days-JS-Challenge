// Task 4: Create a module that exports a single function using default export. Import and use this function in another script.

const questions = [
    "What is your name?",
    "What is your age?",
    "What is your Father's name?",
    "What is your Mother's name?",
    "What is your favorite color?",
]

function askQuestion() {
    let i = 0;
    return function() {
        console.log(questions[i]);
        i++;
    }
}

export default askQuestion;