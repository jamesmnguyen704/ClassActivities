// Follow the steps below to create a **while** loop that TOTALS the numbers from 1 to 100

// 1 create a variable to represent the current number
let currentNumber = 1;

// 2 create a variable to represent the current total
let total = 0;

// 3 write a while loop that sums the numbers from 1 to 100
while (currentNumber <= 100) {
  total += currentNumber;
  currentNumber++; // increment currentNumber by 1 each time the loop runs
  // this is the same as writing currentNumber = currentNumber + 1
  // or currentNumber += 1
  console.log(total); // print the current
}

// Now using the same variables you created in steps 1 and 2, create a **for** loops that TOTALS the numbers from 1 to 100

// 1 write a for loop that sums the numbers from 1 to 100
for (let x = 1; x <= 100; x++) {
  total += x;
}
console.log(total);
