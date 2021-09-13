import introView from "./intro.js";
import aboutView from "./about.js";

// load intro view
export default {
  load() {
    introView();
    aboutView.init();
  },
};
