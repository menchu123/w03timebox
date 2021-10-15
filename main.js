const containerDiv = document.querySelector(".container");

const createButton = document.querySelector("button");

createButton.addEventListener("click", () => {
  // get user input
  const userInput = document.querySelector("input").value;
  const newElement = document.createElement(userInput);

  containerDiv.appendChild(newElement);
});
// create element
