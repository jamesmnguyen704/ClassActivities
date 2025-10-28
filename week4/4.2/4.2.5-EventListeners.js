// notes about event listeners
// event handling node can also have event handlers attach to them once triggered the handler is executed
// common click, dblclick, mouseover, mouseout, mousedown, mouseup, keydown, keyup, keypress, change, submit, load, unload events
// .addEventListener(event, callback) // attach an event listener to a node
// .removeEventListener(event, callback) // remove an event listener from a node

// lesson code
// add an event listener to the cat picture that listens for a "click" and gives an alert
const catPicture = document.querySelector("#cat-picture"); // select the cat picture element
catPicture.addEventListener("click", function() {
  // add click event listener to the cat picture
  alert("Meow! You clicked the cat picture!"); // show alert when cat picture is clicked
}); // end of click event listener

// add an event listener to the list items in the class schedule that listens for a "mouseover" event and changes its background color
const scheduleItems = document.querySelectorAll("#class-schedule-list li"); // select all list items in the class schedule
scheduleItems.forEach(function(item) {
  // loop through each list item
  item.addEventListener("mouseover", function() {
    // add mouseover event listener to each item
    this.style.backgroundColor = "lightblue"; // change background color to lightblue on mouseover
  });
  item.addEventListener("mouseout", function() {
    // add mouseout event listener to each item
    this.style.backgroundColor = ""; // reset background color on mouseout
  }); // target all <li> elements in class schedule list, event "mouseover" changes background color on hover, reset when leaves
}); // add mouseout event listener to each item

// add an event listener to the whole page that listens for a "keydown" event and prints the key that was pressed
document.addEventListener("keydown", function(event) {
  // add keydown event listener to the document
  console.log("key pressed:", event.key); //  log the key that was pressed
}); // end of keydown event listener targets entire document, when "keydown" is pressed down, action prints pressed key to console.

// notes
// mouse events - click, dblclick, mouseover, mouseout, mousedown, mouseup
// keyboard events - keydown, keyup, keypress
// form events - change, submit, focus, blur
// window events - load, unload, resize, scroll // triggered by actions on the window object
// .addEventListener("event", function) to attach an event listener to a node
// .removeEventListener("event", function) to remove an event listener from a node
