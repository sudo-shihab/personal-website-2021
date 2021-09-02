import componentTemplate from "./template.js";

export class BaseStackLayout {
  constructor(appendToEl, marginTop = 0, marginBottom = 0) {
    this.marginBottom = marginBottom;
    this.marginTop = marginTop;
    this.appendToEl = appendToEl;
  }
  render() {
    const template = componentTemplate.getTemplate(
      this.marginTop,
      this.marginBottom
    );
    console.log("template for head is", template);
    this.appendToEl.insertAdjacentHTML("afterBegin", template);
  }
}
