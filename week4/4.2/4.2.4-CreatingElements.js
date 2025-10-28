// Notes
// event handling node can also have event handlers attach to them once triggered the handler is executed
// common click, dblclick, mouseover, mouseout, mousedown, mouseup, keydown, keyup, keypress, change, submit, load, unload events
// .addEventListener(event, callback) // attach an event listener to a node
// .removeEventListener(event, callback) // remove an event listener from a node

// create a new unordered list (ul) element
const newUl = document.createElement("ul"); // adds a new <ul> element to memory, but not yet to DOM

// remove the paragraph element in the nav-bar
const navBar = document.querySelector(".nav-bar"); // select the nav-bar element
const paragraphToRemove = navBar.querySelector("p"); // select the <p> element inside the nav-bar
if (paragraphToRemove) {
  paragraphToRemove.remove(); // remove the <p> element if it exists
}

// add your new ul element to the nav-bar
navBar.appendChild(newUl); // appends the new <ul> element as a child of the nav-bar, now visible in DOM

// create two new list item (li) elements, and add some text to them
const li1 = document.createElement("li"); // create first <li> element
li1.textContent = "Home"; // set text content of first <li> element

const li2 = document.createElement("li"); // create second <li> element
li2.textContent = "About"; // set text content of second <li> element

// add the li elements to the ul in the nav-bar
newUl.appendChild(li1); // adds the first <li> element as a child of the new <ul>
newUl.appendChild(li2); // adds the second <li> element as a child of the new <ul>
