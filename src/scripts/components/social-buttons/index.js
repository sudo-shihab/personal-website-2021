import { socialButtons } from "../../configs/config.js";
import socialButtonTemplate from "./template.js";

export class SocialButtons {
  constructor(contextEl, infoObj) {
    this.$contextEl = contextEl;
    this.infoObj = infoObj;
  }

  render() {
    const template = socialButtonTemplate.getTemplate();
    this.$contextEl.insertAdjacentHTML("afterbegin", template);
  }
}
