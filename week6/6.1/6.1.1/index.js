const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("The form was submitted!");

  console.log("event", event);

  const inputs = event.target.elements;
  console.log("form's input elements: ", inputs);

  let outputItems = "";

  for (let input of inputs) {
    if (input.type !== 'submit') {
      if ((input.type === 'checkbox' || input.type === 'radio') && !input.checked) {
        // If the checkbox or radio is not checked, skip this iteration
        continue;
      }

      // Create a new element
      const listItem = document.createElement("li");
      listItem.textContent = `${input.name}: ${input.value}`;

      // Append the new element to the items
      outputItems += listItem.outerHTML;
    }

    // Set the inner HTML of the output list to the list items
    document.getElementById("form-output").innerHTML = outputItems;
  }

  form.reset();
});
