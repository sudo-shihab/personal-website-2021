import { PrimaryHeader } from "./components/page-header/index.js";
import { PageFooterComponent } from "./components/page-footer/index.js";
import { SplashScreen } from "./components/splash-screen/index.js";
import { BaseStackLayout } from "./layouts/base-stack-layout/index.js";
import { FloatingContact } from "./components/floating-contact/index.js";
import { SocialButtons } from "./components/social-buttons/index.js";
import AppViews from "./views/index.js";
import { globalConfig } from "./configs/config.js";

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

  // inject floating contact component
  const $floatingElHolder = document.getElementById("floating-elements-holder");
  new FloatingContact($floatingElHolder, globalConfig).render();

  // inject floating social buttons component
  const floatingSocialButtonComponent = new SocialButtons(
    $floatingElHolder,
    globalConfig.socialButtons
  );
  floatingSocialButtonComponent.render();

  // load all view [ logical routes ] here
  AppViews.load();

  // footer component
  const homeFooter = new PageFooterComponent($bodyEl);
  // homeFooter.render();
};
