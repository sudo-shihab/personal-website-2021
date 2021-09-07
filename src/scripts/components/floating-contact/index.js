import { floatingContact_template } from "./template.js";

export class FloatingContact {
  constructor(contextElNode, viewInfo) {
    this.contextElNode = contextElNode;
    this.viewInfo = viewInfo;
  }

  render() {
    const getTemplate = floatingContact_template.getPrimaryHtmlText(
      this.viewInfo
    );
    this.contextElNode.insertAdjacentHTML("afterBegin", getTemplate);
  }
}
