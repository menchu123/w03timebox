import Component from "./Component.js";

class Paragraph extends Component {
  text;

  constructor(parentElement, text) {
    super(parentElement, "p");
    this.element.textContent = text;
  }
}

export default Paragraph;
