import defaultTemplate from "./template.js";

export class InfoCard {
  constructor(
    contextEl,
    heading = "Test Heading",
    leading = "Test Leading",
    supportText = "support text",
    intro = "Hi, My Name is"
  ) {
    this.contextEl = contextEl;
    this.heading = heading;
    this.leading = leading;
    this.supportText = supportText;
    this.intro = intro;
  }
  render() {
    const template = defaultTemplate.getTemplate({
      heading: this.heading,
      leading: this.leading,
      description: this.supportText,
      intro: this.intro,
    });
    console.log("got template for into is", template);
    this.contextEl.insertAdjacentHTML("beforeEnd", template);
  }
}
