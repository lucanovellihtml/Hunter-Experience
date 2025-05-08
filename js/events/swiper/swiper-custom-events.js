const swiperEl = document.getElementById("swiperProjectEventsCollab");
Object.assign(swiperEl, {
    slidesPerView: 1,
    pagination: {
        clickable: false,
    },
    breakpoints: {
        // when window width is >= 0px
        0: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        // when window width is >= 640px
        800: {
            slidesPerView: 5,
            spaceBetween: 40
        },
        // when window width is >= 640px
        1300: {
            slidesPerView: 8,
            spaceBetween: 40
        },
    },
});
swiperEl.initialize();