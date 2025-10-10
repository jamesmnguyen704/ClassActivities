// Logical Operators
// what do you expect each line to print?
console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false
console.log(!(true && false)); // true
console.log(false || !false); // true

// Logical Operators and Truthy/Falsy
// ? what do you expect each line to print?
console.log(undefined || null); // null because both is falsy, taking the last value
console.log(!``); // true because empty string is falsy
console.log(!(1 && "false")); // false because both are truthy
console.log(NaN || !"true"); // false because NaN is falsy and "true" is truthy

// Set the age variable below equal to a number,
// then use conditional operators to construct an expression that returns...
// "full menu" if the age is over 10,
// and "kids menu" if the age is less than 10

let age;

// Using only logical operators (no comparison operators),
// write an if statement that prints...
//  "The number is zero" when num is 0.

let num = 0;

// Write your if statement here *
