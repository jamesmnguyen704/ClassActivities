function arrayOfNumbers(end = 100) {
  const nums = [];
  for (let i = 1; i <= end; i++) {
    nums.push(i);
  }
  return nums;
}

// using reduce, sum the numbers from 1 to 200
// hint: use the arrayOfNumbers() function to generate an array
