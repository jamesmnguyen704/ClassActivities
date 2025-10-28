// select all unordered list (ul) elements
document.querySelectorAll("ul"); // select all UNORDER LIST (ul) elements

// select all elements with the class "class-week"
document.querySelectorAll(".class-week"); // the dot prefix indicates a class selector

// select all elements with the class "nav-bar"
document.querySelectorAll(".nav-bar");

// select the element with the id "cat-picture" and save it to a variable
const catPicture = document.getElementById("cat-picture");


// querySelector need a . while getElementById does not for id selection
// querySelectorAll returns a NodeList of all matching elements
// getElementById returns a single element with the specified ID


// Feature	querySelectorAll()	getElementsByClassName()
// Return Type	Static NodeList	Live HTMLCollection
// Selector Types	Any CSS selector	Class names only
// Syntax	.className (with dot)	className (no dot)
// Performance	Slightly slower	Faster
// Updates	Static snapshot	Live updates
// Browser Support	Modern browsers	All browsers
// 🎯 When to Use Which:
// Use querySelectorAll() when:
// ✅ You need complex selectors
// ✅ You want a static list that won't change
// ✅ You're using CSS-style selectors
// ✅ You need flexibility
// Use getElementsByClassName() when:
// ✅ You only need to select by class name
// ✅ You want live updates when DOM changes
// ✅ Performance is critical
// ✅ Working with older browsers
