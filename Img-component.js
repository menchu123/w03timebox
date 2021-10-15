import Component from "./Component.js";

class Img extends Component {
  url;

  constructor(parentElement, url) {
    super(parentElement, "img");
    this.element.src = url;
  }
}

export default Img;
