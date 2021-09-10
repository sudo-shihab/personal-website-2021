export default {
  getTemplate({ intro, heading, leading, description, primaryCTATxt }) {
    return ` <section class="section hero-section" id="intro">
            <p class="text-md mono-font text-radium ">${intro}</p>
            <h1 class="hero-text margin-top-md">${heading}.</h1>
            <h1 class="hero-text margin-top-sm opacity-md">${leading}.</h1>
            <p class="hero__section-description margin-top-md text-sm app-lh-lg opacity-lg">${description}</p>
            <p class="margin-top-xxl"><button class="btn btn-lg btn-primary">${primaryCTATxt}</button></p>
            </section>`;
  },
};
