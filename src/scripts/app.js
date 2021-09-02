import { PrimaryHeader } from "./components/page-header/index.js";
import { PageFooterComponent } from "./components/page-footer/index.js";
import { SplashScreen } from "./components/splash-screen/index.js";
import { BaseStackLayout } from "./layouts/base-stack-layout/index.js";
import AppViews from "./views/index.js";

export default () => {
  // Splash screen component
  const primarySplashScreen = new SplashScreen();
  primarySplashScreen.retract();

  // header component
  const $bodyEl = document.querySelector("body");
  const homePageHeader = new PrimaryHeader($bodyEl);
  homePageHeader.render();

  // inject the main layout
  const $appEl = document.getElementById("app");
  const homePageLayout = new BaseStackLayout($appEl);
  homePageLayout.render();

  // load all views here
  AppViews.load();

  // footer component
  const homeFooter = new PageFooterComponent($bodyEl);
  homeFooter.render();
};
