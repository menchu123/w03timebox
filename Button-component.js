import Component from "./Component.js";

class Button extends Component {
  text;

  constructor(parentElement, text) {
    super(parentElement, "button");
    this.element.textContent = text;
  }
}

export default Button;
