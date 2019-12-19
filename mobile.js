// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;

// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// When changes orientation by mobile devices
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

//Open menu for mobile devices
if (window.matchMedia
    (`only screen and (max-width: 880px)
    and (orientation: portrait),

    only screen and (width: 1024px)
    and (height: 1366px),

    only screen and (max-width: 880px)
    and (max-height: 1024px)
    and (orientation: landscape)`).matches) {
        document.body.style.backgroundColor = pink;
        
        let buttons = document.querySelectorAll('.menu__icon'),
            i, button;

        for (i = 0; i < buttons.length; i++) {
            button = buttons[i];
            button.addEventListener('click', clickHandler);
        }

        function clickHandler() {

            let menuIcons = document.querySelectorAll('.menu__icon'),
            j, icon;

            for (j = 0; j < menuIcons.length; j++) {
                icon = menuIcons[j];
                icon.remove();
            }
            document.querySelector('.menu').remove();
            document.querySelector('.menu__mobile').style.opacity = 1;
            
                        
            // let mobileMenu = document.createElement('nav');
            // mobileMenu.className = "menu__mobile";
            // mobileMenu.innerHTML = `
            // 	<ul class="menu-opened">
            // 		<li class="menu-opened__item menu-opened__item_selected">
            // 			<a href="#main">Главная</a>
            // 		</li>
            // 		<li class="menu-opened__item">
            // 			<a href="#classes">Направления</a>
            // 		</li>
            // 		<li class="menu-opened__item">
            // 			<a href="#teachers">Преподаватели</a>
            // 		</li>
            // 		<li class="menu-opened__item">
            // 			<a href="#prices">Абонементы</a>
            // 		</li>
            // 		<li class="menu-opened__item">
            // 			<a href="#schedule">Расписание</a>
            // 		</li>
            // 		<li class="menu-opened__item">
            // 			<a href="#reviews">Отзывы</a>
            // 		</li>
            // 		<li class="menu-opened__item">
            // 			<a href="#contacts">Контакты</a>
            // 		</li>
            // 	</ul>`;

            // document.querySelector('.menu').append(mobileMenu);
        }
};