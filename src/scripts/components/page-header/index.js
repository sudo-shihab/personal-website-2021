import { primaryHeader } from "./template.js";

export class PrimaryHeader {
  constructor(appendToEl) {
    this.appendToEl = appendToEl;
  }
  render() {
    const template = primaryHeader.getPrimaryTemplate();
    this.appendToEl.insertAdjacentHTML("afterBegin", template);
  }
}
