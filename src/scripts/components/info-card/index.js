import defaultTemplate from "./template.js";

export class InfoCard {
  constructor(
    contextEl,
    heading = "Test Heading",
    leading = "Test Leading",
    supportText = "support text"
  ) {
    this.contextEl = contextEl;
    this.heading = heading;
    this.leading = leading;
    this.supportText = supportText;
  }
  render() {
    const template = defaultTemplate.getTemplate(
      this.heading,
      this.leading,
      this.supportText
    );
    console.log("got template for into is", template);
    this.contextEl.insertAdjacentHTML("beforeEnd", template);
  }
}
