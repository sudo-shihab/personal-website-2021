import { primaryHeader } from "./template.js";
import { globalConfig } from "../../configs/config.js";

export class PrimaryHeader {
  constructor(appendToEl) {
    this.appendToEl = appendToEl;
  }

  constructMenuList() {
    const menuConfig = globalConfig.navMenu;
    let textHtml = "";
    menuConfig.forEach((menu) => {
      textHtml += `<li class="mono-font"><a href="${menu.link}">${menu.name}</a></li>`;
    });
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
