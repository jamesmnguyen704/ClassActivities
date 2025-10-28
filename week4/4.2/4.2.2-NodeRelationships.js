// select the root node
document.documentElement; // the documentElement property represents the <html> @ its ROOT file
// select the last child of the root node
document.documentElement.lastElementChild; // goes to html root file and chooses LAST child which is body
// select all the children of the body element
document.body.children; // returns HTMLCollection of all child elements of body
// select the next sibling of the h2 node
document.querySelector("h2").nextElementSibling; // returns the next sibling element of the first h2 node
// select the parent element of the h1 node
document.querySelector("h1").parentElement; // returns the parent element of the first h1 node

// these are not functions. they are all properties and objects
