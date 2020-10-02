new fullpage('.fullscreen-slide-wrapper', {
    //options here
    autoScrolling: true,
    fixedElements: '.menu__mobile',
    css3: false,
    controlArrows: false,

    // scrollOverflow: true,
    /* scrollOverflowOptions: {
        scrollX: true,
        scrollY: false
    } */
    normalScrollElements: '.schedule-table, .prices-table'
});

//methods
fullpage_api.setAllowScrolling(true);