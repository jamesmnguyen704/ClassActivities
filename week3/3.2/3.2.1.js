// create an Array using an Array literal
let numbers = [10, 20, 30, 40, 50];
// access the 1st item in the Array
console.log(numbers[0]); // 0 always access the first one
// access the last item in the Array
console.log(numbers[4]);
console.log("last item:", numbers[numbers.length - 1]); // access last one no matter what
// print the length of the Array
console.log("length:", numbers.length);
// use the length property to access the last item in the Array
console.log("last item:", numbers[numbers.length - 1]);
// or
let lastItem = numbers[numbers.length - 1];
console.log("last item:", lastItem);
// with for...of, loop over the Array, modify the value and add to a different Array
let doubleNumbers = [];
for (let num of numbers) {
  doubleNumbers.push(num * 2);
}
console.log("numbers:", numbers);
console.log("doubleNumbers:", doubleNumbers);

let TwoXNumbers = [];
let currentIndex = 0;
for (let num of numbers) {
  let newNum = num * 2;

  TwoXNumbers[currentIndex] = newNum;
  currentIndex++;
}
console.log(TwoXNumbers);
