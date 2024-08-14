// Day 21 - LeetCode Easy | JS Challenge

// Activity 1: Two Sum

// Task1:

function TwoSum(num, target){
    const map = new Map();
    for(let i = 0; i < num.length; i++){
        const diff = target - num[i];
        if(map.has(diff)){
            return [map.get(diff), i];
        }
        map.set(num[i], i);
    }
    return [];
}

const testCases = [
  { num: [2, 7, 11, 15], target: 9 },
  { num: [3, 2, 4], target: 6 },
  { num: [3, 3], target: 6 },
  { num: [1, 5, 3, 7, 9], target: 12 },
  { num: [1, 2, 3, 4, 5], target: 10 },
]

testCases.forEach((testCase, index) => {
    console.log(`Test Case ${index + 1}: ${TwoSum(testCase.num, testCase.target)}`);
});


// Activity 2: Reverse Integer

function reverseInteger(val) {
    const negativeValue = val < 0;
    let reverseNumber = parseInt(
        Math.abs(val).toString().split("").reverse().join(""),
        10
    );

    if (reverseNumber > 2 ** 31 - 1) return 0;
    return negativeValue ? -reverseNumber : reverseNumber;
}

const testCases1 = [
    123,
    -123,
    120,
    0,
    1534236469
];

testCases1.forEach((testCase, index) => {
    const result = reverseInteger(testCase);
    console.log("------Reverse Integer-----");
    console.log(`Test Case ${index + 1}: ${testCase} reversed is ${result}`); 
});


// Activity 3: Palindrome Number

function isPalindrome(val) {
    if (val < 0 || (val % 10 === 0 && val !== 0)){
        return false;
    }

    let reverseNumber = 0;
    let originalNumber = val;

    while (val > 0) {
        reverseNumber = reverseNumber * 10 + (val % 10);
        val = Math.floor(val / 10);
    }

    return originalNumber === reverseNumber;
}


const testCases2 = [ 121, -121, 10, 0, 12321, 12345, 123321, 1234321 ];

testCases2.forEach((testCase, index) => {
    const result = isPalindrome(testCase);
    // console.log("------Palindrome Number-----");
    console.log(`Test Case ${index + 1}: ${testCase} is a palindrome: ${result}`);
});

// Activity 4: Merge Two Sorted Lists

class listNodes {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists (list1, list2){
    let dummy = new listNodes();
    let current = dummy;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    current.next = list1 || list2;
    return dummy.next;
}

function createLinkedList(){
    let list = new listNodes();
    let current = list;
    for (let i = 1; i < arguments.length; i++){
        current.next = new listNodes(arguments[i]);
        current = current.next;
    }
    return list.next;
}

function printLinkedList(list){
    let current = list;
    let result = [];
    while (current){
        result.push(current.val);
        current = current.next;
    }
    return result;
}

const list1 = createLinkedList(1, 2, 4);
const list2 = createLinkedList(1, 3, 4);
const list3 = createLinkedList(1, 2, 3, 4, 5);

console.log("------Merge Two Sorted Lists-----");
console.log("Test Case 1: ", printLinkedList(mergeTwoLists(list1, list2)));
console.log("Test Case 2: ", printLinkedList(mergeTwoLists(list2, list3)));


// Activity 5: Valid Parentheses

function validParentheses(str){
    const arr = [];
    const matchingParentheses = {
        "(": ")",
        "{": "}",
        "[": "]"
    };

    for (let i = 0; i < str.length; i++){
        if (matchingParentheses[str[i]]){
            arr.push(str[i]);
        } else {
            if (str[i] !== matchingParentheses[arr.pop()]){
                return false;
            }
        }
    }

    return arr.length === 0;
}

const testCases5 = [
    { input: "()", expected: true },
    { input: "()[]{}", expected: true },
    { input: "(]", expected: false },
    { input: "([)]", expected: false },
    { input: "{[]}", expected: true },
];
 
testCases5.forEach((input, expected) => {
    console.log("------Valid Parentheses-----");
    console.log(`Test Case ${input}: ${validParentheses(input)}, Expected: ${expected}`);
});


