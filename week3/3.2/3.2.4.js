// comparing and passing by reference and value
// ? determine whether each log will print true or false

console.log(4 === 4);
console.log("Hello, world" === "Hello, world");

let x = false; // false
let y = x; // x = false y = false so true
console.log(x === y); // false  and false so true
x = !x; // x = true, y = false
console.log(x === y); //false

console.log([1, 2, "c"] === [1, 2, "c"]); // false because they are two different arrays in memory
// compares by reference not by value. not same memory location
console.log({} === {}); // false because they are two different objects in memory

// de
y = { id: 1 }; // y is now pointing to an object in memory
x = y; // x is now pointing to the same object in memory as y
console.log(x === y); // true because they are pointing to the same object in memory
y.id += 1; // y
console.log(x.id === y.id); // true because they are pointing to the same object in memory

let user1 = { name: "Matt", age: 21};
let admin1 = user1; // admin1 is now pointing to the same object in memory as user1
admin1.name = "bob"; // admin1 is now pointing to the same object in memory as user1
console.log(user1.name); // "bob" because user1 and admin1 point to the same object in memory
