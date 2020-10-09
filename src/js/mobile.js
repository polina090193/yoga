// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;

// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// Height, when orientation changes
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// Open menu
window.addEventListener('resize', () => {
    createMobileMenu();
});

function createMobileMenu() {
    let menuButtons = document.querySelectorAll('.mobile-menu-icon'), menuButton,
    mobileMenu = document.querySelector('.mobile-menu');

    if (window.matchMedia(`only screen and (max-width: 880px) and (orientation: portrait)`).matches) {

        for (menuButton of menuButtons) {
            menuButton.style.display = 'block';
            menuButton.addEventListener('click', clickHandlerMenu);
        }

        function clickHandlerMenu() {

            for (menuButton of menuButtons) {
                menuButton.style.display = 'none';
            }

            mobileMenu.style.display = 'block';

            let menuSelector = mobileMenu.querySelectorAll('.mobile-menu-opened-item');
            let currentPage = fullpage_api.getActiveSection();

            if (currentPage.index < 2) {
                mobileMenu.onload = menuSelector[currentPage.index]
                                    .classList.add('mobile-menu-opened-item-selected');
            } else if (currentPage.index > 2 && currentPage.index < 7) {
                mobileMenu.onload = menuSelector[currentPage.index - 1]
                                    .classList.add('mobile-menu-opened-item-selected');
            } else if (currentPage.index > 7) {
                mobileMenu.onload = menuSelector[currentPage.index - 2]
                                    .classList.add('mobile-menu-opened-item-selected');
            }
            
            let cross = document.createElement('img');
                cross.className = "mobile-menu-close-icon";
                cross.setAttribute('src', "images/x.png");

                document.querySelector('.mobile-menu-opened').append(cross);
                cross.addEventListener('click', clickHandlerCloseMenu);

            let menuLinks = document.querySelectorAll('.mobile-menu-opened-item');
            for (let menuLink of menuLinks) {
                menuLink.addEventListener('click', clickHandlerCloseMenu);
            }

            function clickHandlerCloseMenu() {
                mobileMenu.remove();

                for (menuButton of menuButtons) {
                    menuButton.style.display = 'block';
                }
            }
        }

        let forwardArrows = document.querySelectorAll('.switch-arrow-forward'), forwardArrow;
        let backArrows = document.querySelectorAll('.switch-arrow-back'), backArrow;

        for (forwardArrow of forwardArrows) {
            forwardArrow.addEventListener('click', () => fullpage_api.moveSlideRight());
        }

        for (backArrow of backArrows) {
            backArrow.addEventListener('click', () => fullpage_api.moveSlideLeft());
        }
    } else {
        for (menuButton of menuButtons) {
            menuButton.style.display = 'none';
        }
    }
}
createMobileMenu()