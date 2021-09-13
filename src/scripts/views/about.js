import { ImageInfoCard } from "../components/image-and-info-card/index.js";
import metaInfoObj from "../configs/about-page.js";

export default {
  constructParas() {
    const { descriptionCollection } = metaInfoObj;
    let textNode = "";

    console.log("description is", descriptionCollection);
    descriptionCollection.forEach(({ textContent, id }) => {
      textNode += `<p id="${id}">${textContent}</p>`;
    });
    console.log("final text node is", textNode);
    return textNode;
  },
  init() {
    const $insertingNode = document.getElementById("app");
    metaInfoObj.paragraph = this.constructParas();

    const aboutMeComponent = new ImageInfoCard(
      $insertingNode,
      "beforeEnd",
      metaInfoObj
    );
    aboutMeComponent.render();
  },
};
