// bracket and dot notation
const key = "1";
const obj = {
  key: console.log("the key is 'key'"),
  1: console.log("the key is 1")
};

// what will the following lines print?
obj[key];
obj.key; // same as
obj["key"];

// Create an object with at least four properties, each with a different data type.
// Name one of the four properties "collection" and set its value to an Array or Object.
const myObj = { // object
  name: "James", // string
  age: 30, // number
  isStudent: false, // boolean
  collection: { // object with nested array
    favoriteBooks: ["The Alchemist", "1984", "The Great Gatsby"], // array
    favoriteMovies: ["Inception", "The Matrix", "Interstellar"], // array
    tools: ["Anaplan", "Power BI", "SQL"] // array
  }
}; // object


// Access a value in the "collection" property
console.log(myObj.collection.favoriteBooks[0]); // "The Alchemist"
// Practice with nested Arrays and Objects
const keys = ["key", "1", "method", "favorites", "list"]; // an Array of keys

// Add a property to an Object
obj["newKey"] = "the key is 'newKey' and it refers to a string value"; // same as obj.newKey = ...


// Add a method to an Object
obj.method = function() { // same as obj["method"] = ...
  return "the key is 'method' and it calls refers to a function";
};

// Fill in your favorite movie, number and color below
obj["favorites"] = {
  movie: "",
  number: 0,
  color: ""
};

// Add a list (a.k.a array) to an Object
obj.list = ["a", "b", 3, "d", ["e", 4, 5], { f: 6 }];

// Using the 'for...in' loop to iterate over 'obj' object ...
// how many lines will the following statement print?
// what do you expect to see on each line?
for (let key in keys) {
  console.log(`Key is: ${key} and value is: ${obj[key]}`);
}

// Use a template literal to print a sentence about your favorite things

// Access the values "b", 4, and 6 from obj.list
