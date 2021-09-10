import socialButtonTemplate from "./template.js";

export class SocialButtons {
  constructor(contextEl, infoObj) {
    this.$contextEl = contextEl;
    this.infoObj = infoObj;
  }
  loadInitialTemplate() {
    const wrapperTemplate = socialButtonTemplate.getTemplate();
    this.$contextEl.insertAdjacentHTML("afterbegin", wrapperTemplate);
  }
  buildAndMountButtons() {
    const $selectWrapperNode = document.getElementById("social-component");
    let tempTemplate = "";

    this.infoObj.forEach((socialBtnItem) => {
      tempTemplate += `<li class="media"><a href="${socialBtnItem.enroute}"> <ion-icon name="${socialBtnItem.iconClass}"></ion-icon></a></li>`;
    });

    $selectWrapperNode.insertAdjacentHTML("afterbegin", tempTemplate);
  }
  render() {
    this.loadInitialTemplate();
    this.buildAndMountButtons();
  }
}
