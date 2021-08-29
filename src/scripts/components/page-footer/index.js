import PageFooterTemplate from "./template.js";

export class PageFooterComponent {
  constructor(contextEl) {
    this.contextEl = contextEl;
  }
  render() {
    const template = PageFooterTemplate.getTemplate();
    this.contextEl.insertAdjacentHTML("afterBegin", template);
  }
}
