export default {
  getPrimaryTemplate({ sectionNumber, heading, primaryImage, paragraph }) {
    console.log("about info obj is");
    return ` <section id="about-me" class="about-section">
            <h2 class="mono-font app-h2 app-position-rel app-head-line"><span class="text-radium">${sectionNumber}</span> ${heading}
            </h2>
            <div class="floating-lr-grid-container margin-top-xl">
                <div class="floating-lr-grid-child app-color-paragraph app-lh-lg app-fsz-paragraph" id="description-paras">
                    ${paragraph}
                </div>

                <div class="grid-child green">
                    <figure>
                        <img src="${primaryImage.resource}" alt="${primaryImage.altText}"" class="responsive" id="profile-img" alt="">
                    </figure>
                </div>
            </div>
        </section>`;
  },
};
