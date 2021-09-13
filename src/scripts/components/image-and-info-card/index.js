import template from "./template.js";

export class ImageInfoCard {
  constructor(contextEl, insertPosition = "beforeEnd", infoObj) {
    this.contextEl = contextEl;
    this.insertPosition = insertPosition;
    this.infoObj = infoObj;
  }

  render() {
    const templateForComponent = template.getPrimaryTemplate(this.infoObj);

    this.contextEl.insertAdjacentHTML(
      this.insertPosition,
      templateForComponent
    );
  }
}
