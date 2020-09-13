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
        
        let buttons = document.querySelectorAll('.menu-icon'), button;

        for (button of buttons) {
            button.addEventListener('click', clickHandlerMenu);
        }

        function clickHandlerMenu() {

            let menuIcons = document.querySelectorAll('.menu-icon'), icon;

            for (icon of menuIcons) {
                icon.style.display = 'none';
            }
                        
            let mobileMenu = document.createElement('nav');
                mobileMenu.className = "menu-mobile";
                mobileMenu.innerHTML = `
                    <ul class="menu-opened">
                        <li class="menu-opened-item">
                            <a href="#main">Главная</a>
                        </li>
                        <li class="menu-opened-item">
                            <a href="#classes">Направления</a>
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

            document.querySelector('.menu').append(mobileMenu);

            let menuSelector = mobileMenu.querySelectorAll('.menu-opened-item');
            let currentPage = fullpage_api.getActiveSection();

            if (currentPage.index < 2) {
                mobileMenu.onload = menuSelector[currentPage.index]
                                    .classList.add('menu-opened-item-selected');
            } else if (currentPage.index > 2 && currentPage.index < 7) {
                mobileMenu.onload = menuSelector[currentPage.index - 1]
                                    .classList.add('menu-opened-item-selected');
            } else if (currentPage.index > 7) {
                mobileMenu.onload = menuSelector[currentPage.index - 2]
                                    .classList.add('menu-opened-item-selected');
            }
            
            let cross = document.createElement('img');
            cross.className = "cross";
            cross.setAttribute('src', "images/x.png")
            
            document.querySelector('.menu-mobile').append(cross);
            
            cross.addEventListener('click', clickHandlerCloseMenu);
            let menuLinks = document.querySelectorAll('.menu-opened-item');
            for (let menuLink of menuLinks) {
                menuLink.addEventListener('click', clickHandlerCloseMenu);
            }

            function clickHandlerCloseMenu() {
                mobileMenu.remove();

                for (icon of menuIcons) {
                    icon.style.display = 'block';
                }
            }
        }


        addEventForForwardArrow(document.querySelector('.switch-classes-forward'))
        addEventForBackArrow(document.querySelector('.switch-classes-back'))

        addEventForForwardArrow(document.querySelector('.switch-trainers-arrows-forward'))
        addEventForBackArrow(document.querySelector('.switch-trainers-arrows-back'))
        
        addEventForForwardArrow(document.querySelector('.switch-reviews-forward'))
        addEventForBackArrow(document.querySelector('.switch-reviews-back'))

        function addEventForForwardArrow (selector) {
            selector.addEventListener('click', function(){
                fullpage_api.moveSlideRight();
            });
        }
        
        function addEventForBackArrow (selector) {
            selector.addEventListener('click', function(){
                fullpage_api.moveSlideLeft();
            })
        }
}