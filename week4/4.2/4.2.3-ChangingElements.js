// prenotes
// .outerHTML accessing full HTML of element and all of its children
// .innerHTML accessing only the HTML of an element's children
// .textContent accessing only the text within an element
// .classList return an array-like DOMList of element classes.
// properties include .length, .add(), .remove(), .toggle(), .replace(), .contains()
// attributes stands for name of an HTML attribute like src, href, alt, title, .disabled
// .style is used to get and set inline CSS styles on an element
// to add new HTML element to the DOM, you must first create teh new element before appending it using
// .createElement(), .appendChild(), .insertBefore(), .removeChild(), .replaceChild()

// LESSON CODE

// print the inner HTML of the navigation bar
console.log(document.querySelector(".nav-bar").innerHTML); // index.html <p>Navigation Bar</p> line 13

// print the text content of the #class-schedule-list element
console.log(document.querySelector("#class-schedule-list").textContent); // line 20 accessing only text content

// select the classList for the first class-week, then add the class "week-1"
document.querySelector(".class-week").classList.add("week-1"); // add class week-1 to the first element with "class-week". Now element will have both "class-week" and "week-1" class

// select the img element and add a src attribute
document.querySelector("img")
.setAttribute("src", "../images/kang.jpeg"); // set SRC attribute of first <img> element to the Kang image

// change the font color of the h1 element
document.querySelector("h1").style.color = "blue"; // change the inline css color property of the first <h1> text"element" blue

// Notes
// .innerHTML when HTML tagging
// .textContent for plain text
// .add("class") to add a class to an element's class list
// .remove("class") to remove a class from an element's class list
// .toggle("class") to toggle a class on/off in an element's class list
// .contain("class") to check if an element's class list contains a specific class
// .replace("oldClass", "newClass") to replace an old class with a new class in an element's class list
// .setAttribute("attributeName", "value") to set the value of an attribute on an element
// .style.propertyName = "value" to set an inline CSS style property on an element
