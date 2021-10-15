import Component from "./Component.js";

class Input extends Component {
  text;

  constructor(parentElement, text) {
    super(parentElement, "input");
    this.element.placeholder = text;
  }
}

export default Input;
