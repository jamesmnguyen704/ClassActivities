const { get } = require("http");

// "regular" functions
function greet(name) {
  return `Hello ${name}!`;
}
greet("James");
function welcome(name) {
  return `${name}, welcome!`;
}

function informAboutSale(name) {
  return `${name}, we're having a sale!`;
}

// function that takes a callback function as an argument
function getNameAndShowMessage(callback) {
  const name = prompt("Please Enter Your Name: ");
  alert(callback(name));
}

getNameAndShowMessage(name => `Hello ${name}!`); //anonymous function used for callback function
getNameAndShowMessage(name => '${name}, welcome!`);
getNameAndShowMessage(name => `${name}, we're having a sale!`);


// pass each "regular" function into getAndShowMessage as a callback function
