import defaultTemplate from "./template.js";

export class InfoCard {
  constructor(contextEl, introViewInfo) {
    this.contextEl = contextEl;
    this.viewInfoObj = introViewInfo;
  }
  render() {
    const template = defaultTemplate.getTemplate(this.viewInfoObj);
    console.log("got template for into is", template);
    this.contextEl.insertAdjacentHTML("beforeEnd", template);
  }
}
