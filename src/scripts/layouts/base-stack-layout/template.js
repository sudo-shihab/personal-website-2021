export default {
  getTemplate(mrgTop = 0, mrgBtm = 0) {
    return `<div class="base-stack-layout app-layout" id="app-layout" role="grid" style="margin-bottom:  ${mrgBtm}; margin-top: ${mrgTop}">
          </div>`;
  },
};
