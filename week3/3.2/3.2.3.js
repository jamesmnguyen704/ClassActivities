let x = 5;
let y = [1, 2, 30];
let z = {
  id: 100,
  name: "myName",
  loggedIn: false
};
// reassign x, y, and z to FALSY values
x = 0;
y = null;
z = null;
console.log(x, y, z); // 0, null, nan, undefined, "",

// print x, y, and z. Mutable is mutating the value
// in javascript only mutable ones are list and array. all other types are UNMUTABLE
const a = "name";
const b = []; // can't replace the whole value but you can modify attributes inside []
const c = {}; // can't replace the whole value but you can modify attributes inside {}
// try to reassign a, b, and c to FALSY values

// using BRACKET NOTATION, assign a value to b
b[0] = "first item in the list";
// b = ["Matt"]; nope because it is a string
// using DOT NOTATION, assign a PROPERTY to c
c.name = "James"; //
// using DOT NOTATION, assign a METHOD to c
c.speak = function() {
  console.log("James");
};
c.yell = function() {
  console.log("JAMES");
}
// using BRACKET NOTATION, call the method in c
let type = "speak";
c[type]();
type = `yell`;
c[type]();
c.speak();

// print a, b, and c
//
