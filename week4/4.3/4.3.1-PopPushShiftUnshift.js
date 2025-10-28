// notes
// .toUpperCase() and .toLowerCase() do not modify the original string
// .indexOf() returns the index if the first occurrence of a substring, or -1 if not found
// .lastIndexOf() returns the index of the last occurrence of a substring, or -1 if not found
// .includes() returns true if a substring is found, false otherwise
// .trim() removes whitespace from both ends of a string
// .replace() replaces the first occurrence of a substring with another substring
// .concat() joins two or more strings together
// .split() splits a string into an array of substrings based on a specified separator
// array.prototype methods: pop, push, shift, unshift
// .push(item) adds an item to the end of an array
// .unshift(item) adds an item to the beginning of an array
// .pop() removes and returns the last item of an array
// .shift() removes and returns the first item of an array

const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
const lastItem = nums.pop(); // 0
const lastItem2 = nums.pop(); // 1
console.log("nums after pop:", nums)
// remove each of the first two items with shift(), saving each item to a variable
const firstItem = nums.shift(); // 6
const firstItem2 = nums.shift(); // 5
console.log("nums after shift:", nums);
// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.unshift(firstItem, firstItem2); // add 0 and 1 to the beginning
nums.push(lastItem2, lastItem); // add 5 and 6 to the end

console.log(nums); // [0, 1, 2, 3, 4, 5, 6]

let oneThroughTen = [];
for (let i = 1; i <= 10; i++) {
  oneThroughTen.push(i);
}
console.log("oneThroughTen:", oneThroughTen); // [1,2,3,4,5,6,7,8,9,10]
