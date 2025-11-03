// Create the form element
const myForm = document.createElement("form");
myForm.setAttribute("method", "post");
myForm.setAttribute("action", "/submit-form"); // Example action URL

// Create a label and input for a name field
const nameLabel = document.createElement("label");
nameLabel.textContent = "Name:";
const nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("name", "user_name");
nameInput.setAttribute("required", true);

// Create a submit button
const submitBtn = document.createElement("input");
submitBtn.setAttribute("type", "submit");
submitBtn.setAttribute("value", "Send");

// Append elements to the form
myForm.appendChild(nameLabel);
myForm.appendChild(nameInput);
myForm.appendChild(document.createElement("br")); // Add a line break for spacing
myForm.appendChild(submitBtn);

// Append the form to the document body
document.body.appendChild(myForm);