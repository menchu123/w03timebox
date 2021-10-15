import Img from "./Img-component.js";

const containerDiv = document.querySelector(".container");

const createNewImg = () => {
  // get user input
  const userInput = document.querySelector(".image-input").value;
  // create component
  new Img(containerDiv, userInput);
};

const imageButton = document.querySelector(".image-button");
imageButton.addEventListener("click", createNewImg);

export default createNewImg;
