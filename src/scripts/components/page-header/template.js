export const primaryHeader = {
  getPrimaryTemplate() {
    return ` 
    <header class="primary-padding-allround">
            <div class="logo responsive" id="main-logo">
                <img src="./src/images/logo.png" class="responsive">
            </div>
            <nav>
                <ul id="menu"></ul>
                <ul class="hide" id="mobile-menu">
                    <li>Shihab</li>
                </ul>
            </nav>
        </header>`;
  },
};
