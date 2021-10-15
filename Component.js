class Component {
  element;
  parentElement;

  constructor(parentElement, htmlTag) {
    this.element = document.createElement(htmlTag);
    this.parentElement = parentElement;

    this.parentElement.appendChild(this.element);
  }
}

export default Component;
