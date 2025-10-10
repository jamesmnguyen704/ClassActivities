// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let myString = "whats up";
let myNumber = 23;
let myBoolean = true;
let myUndefined;
let myNull = null;
let athlete = "Michael Jordan";
let food = "fries";
let sauce = "ranch";
let animal = "GOAT";
// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(typeof myString);
console.log(typeof myNumber);
console.log(typeof myBoolean);
console.log(typeof myUndefined);
console.log(typeof myNull);
// create a variable that references a template literal
// inside the template literal, use two of the above variables
let message = `${athlete} said ${myString} and his jersey number is ${myNumber} for the Chicago Bulls.`;
console.log(message);
let joke = `${athlete} didn't just dunk basketballs, he also dunked ${food} with ${sauce} since he was the ${animal}.`;
console.log(joke);

// reassign the value of the variable that references "null"
myNull = "You NULL when you NULL";
console.log(myNull);
console.log(typeof myNull);

// print a variable that causes a ReferenceError
console.log("chicken");
// alter the previous line to no longer cause a ReferenceError
let chicken = "nuggets";
console.log(chicken);
