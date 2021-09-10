export const floatingContact_template = {
  getPrimaryHtmlText({ userEmailID }) {
    return `<p class="mono-font email__component floating-component hide"> <a href="#"> ${userEmailID} </a> </p>`;
  },
};
