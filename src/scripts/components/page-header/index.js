import { primaryHeader } from "./template.js";

export class PrimaryHeader {
  constructor(appendToEl) {
    this.appendToEl = appendToEl;
  }
  render() {
    const template = primaryHeader.getPrimaryTemplate();
    console.log("template for head is", template);
    this.appendToEl.insertAdjacentHTML("afterBegin", template);
  }
}
