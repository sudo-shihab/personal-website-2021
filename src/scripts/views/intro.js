import { InfoCard } from "../components/info-card/index.js";
import { introView } from "../configs/config.js";

export default function () {
  const $appLayout = document.getElementById("app-layout");
  const { devName, leadingText, description } = introView;
  const introSection = new InfoCard(
    $appLayout,
    devName,
    leadingText,
    description
  );

  introSection.render();
}
