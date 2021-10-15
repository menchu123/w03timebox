import Img from "./Img-component.js";
import Button from "./Button-component.js";
import Paragraph from "./P-component.js";
import Input from "./input.js";

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

// paragraph
const createNewParagraph = () => {
  // get user input
  const userInput = document.querySelector(".paragraph-input").value;
  // create component
  new Paragraph(containerDiv, userInput);
};

const paragraphButton = document.querySelector(".paragraph-button");
paragraphButton.addEventListener("click", createNewParagraph);

// input
const createNewInput = () => {
  // get user input
  const userInput = document.querySelector(".input-input").value;
  // create component
  new Input(containerDiv, userInput);
};

const inputButton = document.querySelector(".input-button");
inputButton.addEventListener("click", createNewInput);

export default createNewImg;
