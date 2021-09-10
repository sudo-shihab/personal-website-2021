export class AppButton {
  constructor(contextEl, infoObj) {
    this.contextEl = contextEl;
    this.infoObj = infoObj;
  }
  render() {
    const getTemplate = `<button class="btn btn-md btn-primary">Resume</button>`;
    this.contextEl.insertAdjacentHTML("afterBegin", getTemplate);
    return "";
  }
}
