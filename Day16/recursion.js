// Day 16 JS challenge - Recursion

// Activity 1: Basic recursion

// Task 1:

function factorial (n){
    if (n === 0 || n === 1){
        return 1;
    } 

    return n * factorial(n-1);
}

// console.log(factorial(5));
// console.log(factorial(3));

// Task 2:

function fibonacci(n){
    if (n === 0){
        return 0;
    }
    if (n === 1){
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

// console.log(fibonacci(5));
// console.log(fibonacci(10));

// Activity 2: Recursion with arrays

// Task 3:

function sumArray(arr){
    if (arr.length === 0){
        return 0;
    }
    return arr[0] + sumArray(arr.slice(1));
}

// console.log(sumArray([1,2,3,4,5]));
// console.log(sumArray([]));

// Task 4:

function maxArray(arr){
    if (arr.length === 1){
        return arr[0];
    }
    return Math.max(arr[0], maxArray(arr.slice(1)));
}

// console.log(maxArray([1,2,3,4,5]));
// console.log(maxArray([52,42,23,22,111]));

// Activity 3: String Manipulation with Recursion

// Task 5:

function reverseString(str){
    if (str === "" || str.length === 1){
        return str;
    }

    return reverseString(str.slice(1)) + str[0];
}

// console.log(reverseString("hello"));
// console.log(reverseString("Abdul Haseeb"));

// Task 6:

function isPalindrome(str){
    if (str.length === 0 || str.length === 1){
        return true;
    }

    if (str[0] === str[str.length-1]){
        return isPalindrome(str.slice(1, str.length-1));
    }
    return false;
}

// console.log(isPalindrome("hello"));
// console.log(isPalindrome("madam"));

// Activity 4:

// Task 7:

function binarySearch (arr, target, left=0, right=arr.length-1){
    // Implement binary search using recursion
    if (left > right){
        return -1;
    }

    const midPoint = Math.floor((left + right) / 2);
    if (arr[midPoint] === target){
        return midPoint;
    }

    if (arr[midPoint] < target){
        return binarySearch(arr, target, midPoint+1, right);
    } else {
        return binarySearch(arr, target, left, midPoint-1);
    }
}

// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 5));
// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 11));
// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 1));
// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 10));
// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 3));

// Task 8: 

function countOccurences (arr, target){
    if (arr.length === 0){
        return 0;
    }

    if (arr[0] === target){
        return 1 + countOccurences(arr.slice(1), target);
    } else {
        return countOccurences(arr.slice(1), target);
    }
}

// console.log(countOccurences([1,2,3,4,5,6,7,8,9,10], 5));
// console.log(countOccurences([1,2,3,4,5,6,7,8,9,10], 11));
// console.log(countOccurences([1,2,3,4,5,6,7,8,9,10], 1));

// Activity 5: Tree Traversal 

// Task 9:

class TreeNode {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  function inOrderTraversal(node) {
    if (node === null) return;
  
    inOrderTraversal(node.left);
  
    console.log(node.value);
  
    inOrderTraversal(node.right);
  }
  
  const root = new TreeNode(
    10,
    new TreeNode(5, new TreeNode(3), new TreeNode(7)),
    new TreeNode(15, new TreeNode(12), new TreeNode(20))
  );
  
  inOrderTraversal(root);

// Task 10:

function calculateDepth(node) {
    if (node === null) {
        return 0;
    }
    
    const leftDepth = calculateDepth(node.left);
    const rightDepth = calculateDepth(node.right);
    
    return Math.max(leftDepth, rightDepth) + 1;
}

const roots = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
console.log(calculateDepth(roots)); // 3

const singleNode = new TreeNode(1);
console.log(calculateDepth(singleNode)); // 1

const emptyTree = null;
console.log(calculateDepth(emptyTree)); // 0