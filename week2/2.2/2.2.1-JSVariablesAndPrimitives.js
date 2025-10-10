// create a constant variable called "name" that references a string
const name = "James";
// create a reassignable variable called "favoriteSong" that references a string
let favoriteSong = "thriller";
// create a reassignable variable called "wage" that references a number
let wage = 15;
// create a variable called "age" that references a number, should it be reassignable?
let age = 21; // when using let instead of const you can reassign it later.
// create a variable called "onlyChild" that references a boolean
let onlyChild = true;
// create a variable called "satisfied" that references a boolean
let satisfied = true; // we could use false too
// print the types of two variables that reference two different data types (typeof)
console.log(typeof favoriteSong);
console.log(typeof age);
// create a variable called "favoriteThing" that references ANY primitive value
let favoriteThing = "redbull";
// print the data type of "favoriteThing"
console.log(typeof favoriteThing);
// You heard a new song that became your favorite.
// Reassign the variable "favoriteSong"
favoriteSong = "nothing is better than thriller";
// You no longer like the type of data stored in "favoriteThing"
// Reassign "favoriteThing" to a different primitive data type and print its type
favoriteThing = "Starbucks coffee";
console.log(typeof favoriteThing);
// Happy Birthday!
// Reassign "age" to a new value
age = 5;
// You got a big raise at work.
// Reassign "wage" to a new value
wage = 5;
// Your raise changed your job satisfaction.
// Assign "satisfied" to true
satisfied = true;
// use "console.log()" and "+" to print a sentence that includes two of the above variables
console.log("Hello, my name is " + name + " and I am " + age + " year old.");
