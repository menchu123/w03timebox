import Img from "./Img-component.js";
import Button from "./Button-component.js";

const containerDiv = document.querySelector(".container");

// image
const createNewImg = () => {
  // get user input
  const userInput = document.querySelector(".image-input").value;
  // create component
  new Img(containerDiv, userInput);
};

const imageButton = document.querySelector(".image-button");
imageButton.addEventListener("click", createNewImg);

// button
const createNewButton = () => {
  // get user input
  const userInput = document.querySelector(".button-input").value;
  // create component
  new Button(containerDiv, userInput);
};

const buttonButton = document.querySelector(".button-button");
buttonButton.addEventListener("click", createNewButton);

export default createNewImg;
