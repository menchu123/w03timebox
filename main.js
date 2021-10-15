import Component from "./Component.js";

const containerDiv = document.querySelector(".container");

const createButton = document.querySelector("button");

const createNewElement = () => {
  // get user input
  const userInput = document.querySelector("input").value;

  new Component(containerDiv, userInput);
};

createButton.addEventListener("click", createNewElement);

// export
export default createNewElement;
