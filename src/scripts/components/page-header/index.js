import { primaryHeader } from "./template.js";
import { globalConfig } from "../../configs/config.js";
import { AppButton } from "../app-button/index.js";

export class PrimaryHeader {
  constructor(appendToEl) {
    this.appendToEl = appendToEl;
    this.$body = document.querySelector("body");
  }

  constructMenuList() {
    const menuConfig = globalConfig.navMenu;
    let textHtml = "";
    const $menuparent = document.getElementById("menu");

    menuConfig.forEach(({ type, link, name }) => {
      if (type != "button")
        textHtml += `<li class="mono-font"><a href="${link}">${name}</a></li>`;
      else
        textHtml += `<li  class="mono-font">${new AppButton(
          $menuparent,
          {}
        ).render()}</li>`;
    });
    console.log("texthtml is", textHtml);
    return textHtml;
  }

  render() {
    const template = primaryHeader.getPrimaryTemplate();
    this.appendToEl.insertAdjacentHTML("afterBegin", template);

    const constructMenuList = this.constructMenuList();
    const $menuHolderNode = document.getElementById("menu");
    $menuHolderNode.insertAdjacentHTML("afterbegin", constructMenuList);
  }
}
