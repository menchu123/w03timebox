const containerDiv = document.querySelector(".container");

const createButton = document.querySelector("button");

const createNewElement = () => {
  // get user input
  const userInput = document.querySelector("input").value;
  const newElement = document.createElement(userInput);

  // create element
  containerDiv.appendChild(newElement);
};

createButton.addEventListener("click", createNewElement);

// export
