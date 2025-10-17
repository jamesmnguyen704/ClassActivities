3.1.5.js
// wrap the code below in a function called "addNumbersFrom1To100" and return the total
// ! do not use console.log inside your function

function addNumbersFrom1To100() {
  let total = 0;
  for (let i = 1; i <= 100; i++) {
    total += i;
  }
  return total;
}

console.log(addNumbersFrom1To100());
// invoke the function and console.log its value

// try to print the variable "total" outside the function
// ? what do you expect ?
// Uncommenting the line below would cause a ReferenceError:
// console.log(total); // ReferenceError: total is not defined

// examine the code below,
// ? which console.log statement will not print when you invoke the parentAndChildScope function ?
function childScope(param) {
  const childVariable = "I am in the child's scope";
  console.log("Child Scope, Parent Variable:", param);
  console.log("Child Scope, Child Variable:", childVariable);
}

function parentAndChildScope() {
  const parentVariable = "I am in the parent's scope";
  childScope(parentVariable);
  console.log("Parent Scope, Parent Variable:", parentVariable);
  console.log("Parent Scope, Child Variable:", childVariable); // This line will cause an error!
}

// Let's test the functions:
console.log("\n--- Testing parentAndChildScope function ---");
try {
  parentAndChildScope();
} catch (error) {
  console.log("Error caught:", error.message);
}

console.log("\n--- Demonstrating scope with a working example ---");
function workingParentScope() {
  const parentVariable = "I am in the parent's scope";
  childScope(parentVariable);
  console.log("Parent Scope, Parent Variable:", parentVariable);
  // Notice: we're NOT trying to access childVariable here
}

workingParentScope();
