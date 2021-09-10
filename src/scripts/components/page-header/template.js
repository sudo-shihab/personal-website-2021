export const primaryHeader = {
  getPrimaryTemplate() {
    return ` 
    <header class="primary-padding-allround">
            <div class="logo responsive" id="main-logo">
                <img src="./src/images/logo.png" class="" style="height:45px">
                <!-- <div class="triangle"></div> -->
            </div>
            <nav>
                <ul id="menu" class="hide"></ul>
                <ul id="mobile-menu">
                    <li id="nav-hamburger"><i class="gg-menu-right"></i></li>
                </ul>
            </nav>
        </header>`;
  },
};
