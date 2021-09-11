export default {
  getTemplate({ intro, heading, leading, description, primaryCTATxt }) {
    return ` <section class="section hero-section" id="intro">
            <p class="text-md mono-font text-radium ">${intro}</p>
            <h1 class="app-color-heading app-fsz-hero  margin-top-md">${heading}.</h1>
            <h1 class="app-color-subheading app-fsz-hero  margin-top-sm">${leading}.</h1>
            <p class="app-color-paragraph margin-top-md app-lh-lg app-fsz-paragraph" style="max-width:${description.maxWidth}">${description.text}</p>
            <p class="margin-top-xxl"><button class="btn btn-lg btn-primary">${primaryCTATxt}</button></p>
            </section>`;
  },
};
