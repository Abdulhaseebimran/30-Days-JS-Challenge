// Day 22 - JS challenge

// LeetCode Medium Problem

// Activity 1: Add Two Numbers

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function PrintTwoNumber(val1, val2) {
  let node = new ListNode(0);
  let currentNode = node;
  let carry = 0;

  while (val1 !== null || val2 !== null) {
    let x = val1 !== null ? val1.val : 0;
    let y = val2 !== null ? val2.val : 0;
    let sum = x + y + carry;

    carry = Math.floor(sum / 10); // 1
    currentNode.next = new ListNode(sum % 10); // 7
    currentNode = currentNode.next;

    if (val1 !== null) val1 = val1.next;
    if (val2 !== null) val2 = val2.next;
  }

  if (carry > 0) {
    currentNode.next = new ListNode(carry);
  }

  return node.next;
}

function createLinkedList(arr) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummyHead.next;
}

function printLinkedList(list) {
  let result = [];
  while (list !== null) {
    result.push(list.val);
    list = list.next;
  }
  console.log(result.join(" -> "));
}

let l1 = createLinkedList([2, 4, 3]);
let l2 = createLinkedList([5, 6, 4]);
let sum = PrintTwoNumber(l1, l2);
printLinkedList(sum);

l1 = createLinkedList([0]);
l2 = createLinkedList([0]);
sum = PrintTwoNumber(l1, l2);
printLinkedList(sum);

l1 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
l2 = createLinkedList([9, 9, 9, 9]);
sum = PrintTwoNumber(l1, l2);
printLinkedList(sum);

// Activity 2: Longest Substring Without Repeating Characters

function LongestSubstring(s) {
  let num = s.length;
  let maxLength = 0;
  let start = 0;
  let map = new Map();

  for (let i = 0; i < num; i++) {
    if (map.has(s[i])) {
      start = Math.max(map.get(s[i]), start);
    }
    maxLength = Math.max(maxLength, i - start + 1);
    map.set(s[i], i + 1);
  }

  return maxLength;
}

console.log(LongestSubstring("abcabcbb")); // 3
console.log(LongestSubstring("bbbbb")); // 1
console.log(LongestSubstring("pwwkew")); // 3
console.log(LongestSubstring("")); // 0
console.log(LongestSubstring("Abdulhaseeb")); // 8

// Activity 3: Container with most water

function MaxArea(height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    maxArea = Math.max(
      maxArea,
      Math.min(height[left], height[right]) * (right - left)
    );
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

console.log(MaxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(MaxArea([1, 1])); // 1
console.log(MaxArea([4, 3, 2, 1, 4])); // 16
console.log(MaxArea([1, 2, 1])); // 2
console.log(MaxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49

// Activity 4: 3Sum

function ThreeSum(nums) {
  let result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      let low = i + 1;
      let high = nums.length - 1;
      let sum = 0 - nums[i];

      while (low < high) {
        if (nums[low] + nums[high] === sum) {
          result.push([nums[i], nums[low], nums[high]]);
          while (low < high && nums[low] === nums[low + 1]) low++;
          while (low < high && nums[high] === nums[high - 1]) high--;
          low++;
          high--;
        } else if (nums[low] + nums[high] < sum) {
          low++;
        } else {
          high--;
        }
      }
    }
  }

  return result;
}


console.log(ThreeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log(ThreeSum([])); // []
console.log(ThreeSum([0])); // []
console.log(ThreeSum([0, 0, 0, 0])); // [[0,0,0]]
console.log(ThreeSum([-2, 0, 1, 1, 2])); // [[-2,0,2],[-2,1,1]]

// Activity 5: Group Anagrams

function GroupAnagrams(strs) {
    let map = new Map();
    
    for (let str of strs) {
        let key = [...str].sort().join("");
        if (!map.has(key)) {
        map.set(key, []);
        }
        map.get(key).push(str);
    }
    
    return Array.from(map.values());
}

console.log(GroupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [["eat","tea","ate"],["tan","nat"],["bat"]]
console.log(GroupAnagrams([""]));
// [[""]]
console.log(GroupAnagrams(["a"]));
// [["a"]]
console.log(GroupAnagrams(["hello", "world"]));
// [["hello"],["world"]]