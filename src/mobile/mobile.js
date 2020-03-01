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
        
        let buttons = document.querySelectorAll('.menu__icon'), button;

        for (button of buttons) {
            button.addEventListener('click', clickHandlerMenu);
        }

        function clickHandlerMenu() {

            let menuIcons = document.querySelectorAll('.menu__icon'), icon;

            for (icon of menuIcons) {
                icon.style.display = 'none';
            }
                        
            let mobileMenu = document.createElement('nav');
                mobileMenu.className = "menu__mobile";
                mobileMenu.innerHTML = `
                    <ul class="menu-opened">
                        <li class="menu-opened__item menu-opened__item_selected">
                            <a href="#main">Главная</a>
                        </li>
                        <li class="menu-opened__item">
                            <a href="#classes">Направления</a>
                        </li>
                        <li class="menu-opened__item">
                            <a href="#teachers">Преподаватели</a>
                        </li>
                        <li class="menu-opened__item">
                            <a href="#prices">Абонементы</a>
                        </li>
                        <li class="menu-opened__item">
                            <a href="#schedule">Расписание</a>
                        </li>
                        <li class="menu-opened__item">
                            <a href="#reviews">Отзывы</a>
                        </li>
                        <li class="menu-opened__item">
                            <a href="#contacts">Контакты</a>
                        </li>
                    </ul>`;

            document.querySelector('.menu').append(mobileMenu);
            
            
            let cross = document.createElement('img');
            cross.className = "cross";
            cross.setAttribute('src', "images/x.png")
            
            document.querySelector('.menu__mobile').prepend(cross);

            cross.addEventListener('click', clickHandlerCloseMenu);
            let menuLinks = document.querySelectorAll('.menu-opened__item');
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

        document.querySelector('.switch-classes-forward')
            .addEventListener('click', function(){
                fullpage_api.moveSlideRight();
            });

        document.querySelector('.switch-classes-back')
            .addEventListener('click', function(){
                fullpage_api.moveSlideLeft();
        });

};