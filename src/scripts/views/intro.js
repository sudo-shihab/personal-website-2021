import { InfoCard } from "../components/info-card/index.js";
import { introView } from "../configs/config.js";

export default function () {
  const $appLayout = document.getElementById("app-layout");
  const introSection = new InfoCard($appLayout, introView);
  introSection.render();
}
