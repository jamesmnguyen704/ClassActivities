// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
function snack(a, b) {
  console.log("a:", a); //5
  console.log("b:", b); //10
  return a + b;
}
// invoke the function and pass in two numbers
console.log(snack(5, 10)); // 15
// invoke the function and pass in more than two numbers
console.log(snack(5, 10, 15, 20));
// invoke the function and pass in only one number
console.log(snack(10));
// change the function to set default values for the parameters
function snack2(a = 0, b = 0) {
  console.log("a:", a);
  console.log("b:", b);
  return a + b;
}
// again, invoke the function and pass in only one number
console.log(snack2(5));
// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator

// again, invoke the function and pass in more than two numbers
