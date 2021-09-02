export default {
  getTemplate(heading, leading, description) {
    return ` <section class="section" id="intro">
            <h1>${heading}</h1>
            <h1>${leading}</h1>
            <p>${description}</p>
            </section>`;
  },
};
