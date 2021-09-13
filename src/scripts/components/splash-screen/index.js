export class SplashScreen {
  constructor() {
    this.$splashScreenOverlayEl = document.querySelector(
      "#splash-section #modal-overlay"
    );
    this.$splashComponent = document.getElementById("splash-section");
    this.$splashScreenLoader = document.getElementById("splash-screen-loader");
    this.$rootEl = document.querySelector("html");
  }

  retract() {
    setTimeout(() => {
      this.$splashScreenOverlayEl.classList.toggle("gradual-decedent", true);
    }, 1000);

    setTimeout(() => {
      this.$splashScreenLoader.classList.toggle("hide");
      this.$splashComponent.classList.toggle("hide");
      this.$rootEl.classList.toggle("overflow-hidden");
    }, 1500);
  }
}
