// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;

// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// When orientation changes (for mobile devices)
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// Open menu (for mobile devices)
if (window.matchMedia
    (`only screen and (max-width: 880px)
    and (orientation: portrait),
    `).matches) {
        
        let menuButtons = document.querySelectorAll('.mobile-menu-icon'), menuButton;

        for (menuButton of menuButtons) {
            menuButton.style.display = 'block';
            menuButton.addEventListener('click', clickHandlerMenu);
        }

        function clickHandlerMenu() {

            for (menuButton of menuButtons) {
                menuButton.style.display = 'none';
            }

            let mobileMenu = document.querySelector('.mobile-menu');

            /* let menuIcons = document.querySelectorAll('.menu-icon'), icon;

            for (icon of menuIcons) {
                icon.style.display = 'none';
            } */

            mobileMenu.style.display = 'block';
                        
            /* let mobileMenu = document.createElement('nav');
                mobileMenu.className = "menu-mobile";
                mobileMenu.innerHTML = `
                    <ul class="menu-opened">
                        <li class="menu-opened-item">
                            <a href="#main">Главная</a>
                        </li>
                        <li class="menu-opened-item">
                            <a href="#courses">Направления</a>
                        </li>
                        <li class="menu-opened-item">
                            <a href="#trainers">Преподаватели</a>
                        </li>
                        <li class="menu-opened-item">
                            <a href="#prices">Абонементы</a>
                        </li>
                        <li class="menu-opened-item">
                            <a href="#schedule">Расписание</a>
                        </li>
                        <li class="menu-opened-item">
                            <a href="#reviews">Отзывы</a>
                        </li>
                        <li class="menu-opened-item">
                            <a href="#contacts">Контакты</a>
                        </li>
                    </ul>`;

            document.querySelector('.main-menu').append(mobileMenu); */

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
}