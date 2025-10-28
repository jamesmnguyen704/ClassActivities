/**
 * Array Concatenation and Join Operations
 * Demonstrates how to combine arrays and convert them to strings
 */

// Step 1: Initialize source arrays with mixed data types
const arrOne = ["a", [0], "b"];
const arrTwo = [1, 2, "c", ["d", 3]];

console.log("Original arrOne:", arrOne);
console.log("Original arrTwo:", arrTwo);

// Step 2: Concatenate arrTwo, 4, and "e" to arrOne and save the resulting array to a variable
const mergedArray = arrOne.concat(arrTwo, 4, "e");
console.log("Merged array:", mergedArray);
// Result: ['a', [0], 'b', 1, 2, 'c', ['d', 3], 4, 'e']

// Step 3: Join the merged array elements into a single string using "-" separator
const joinedString = mergedArray.join("-");
console.log("Joined string:", joinedString);
// Result: 'a-0-b-1-2-c-d,3-4-e'

/**
 * Key Observations:
 * - concat() creates a new array without modifying originals
 * - Nested arrays are flattened one level when joined
 * - Mixed data types are converted to strings during join
 */
