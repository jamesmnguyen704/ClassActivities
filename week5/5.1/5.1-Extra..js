// // Using the "some" method, see if the array includes a string or a number.
// let someArr = [1, 30, "Thirty", true, 45];

// let stringOrNumber = someArr.some(item => typeof item === "string" || typeof item === "number");
// console.log(stringOrNumber);


// Using the "every" method, see if all of the items are positive. Using a different method(s), remove the negative numbers, then check again if all the arrays are positive.
let everyArr = [-5, -100, 10, 50, 60];

// check to see if items are positive
let allPositive = everyArr.every(num => num > 0);
console.log(allPositive); // output has false because of element -5 and -100

// removing negative numbers
let onlyPositive = everyArr.filter(num => num > 0);
// we pulled just the 10, 50, and 60 for new array onlyPositive

// checking again
let imPositiveImRight = onlyPositive.every(num => num > 0); // new away should pass
console.log(onlyPositive);
console.log(imPositiveImRight);
