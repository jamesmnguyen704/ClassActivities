// refactor the functions below into arrow syntax
function myNumberFunction() {
  return ((2 ** 2 + 3) % 4) * 14;
}
//refactored into concise arrow function since its a single expression
const myNumberFunctionConcise = () => ((2 ** 2 + 3) % 4) * 14;
//refactored into block body arrow function
const myNumberFunctionBlock = () => { // need return keyword in block body
  return ((2 ** 2 + 3) % 4) * 14;
};

function greet(name) { // concise since it's short when it brings value
  return `Hello, ${name}`;
//refactored into concise arrow function
const greatConcise = (name) => `Hello, ${name}`; // no return keyword needed in concise body

//refactored into concise arrow function
const timeOfDayGreet = function(name, timeOfDay) {
  return `Hello, ${name}, good ${timeOfDay}`;
};
const timeOfDayGreetConcise = (name, timeOfDay) => `Good ${timeOfDay}, ${name}`; // no return keyword needed in concise body
//refactored into block body arrow function since its a maniulation of two parameters
function tripleAndHalf(num) {
  let triple = num * 3;
  return triple / 2;
}
// block since its multiple values and manipulation
const tripleAndHalf = (num) => {
  let triple = num * 3;
  return triple / 2;
};
const tripleAndHalf = (num) => (num * 3) / 2;
//refactored into block body arrow function since its a maniulation of two parameters
function sumTwoNumbers(num1, num2) {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
}

// block body arrow function, concise will not work since it two different things
const sumTwoNumbers = (num1, num2) => {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
};
