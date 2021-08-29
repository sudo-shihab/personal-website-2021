import { PrimaryHeader } from "./components/page-header/index.js";
import { PageFooterComponent } from "./components/page-footer/index.js";
import { SplashScreen } from "./components/splash-screen/index.js";

export default () => {
  // Splash screen component
  const primarySplashScreen = new SplashScreen();
  primarySplashScreen.retract();

  // header component
  const $bodyEl = document.querySelector("body");
  const homePageHeader = new PrimaryHeader($bodyEl);
  homePageHeader.render();

  // footer component
  const homeFooter = new PageFooterComponent($bodyEl);
  homeFooter.render();
};
