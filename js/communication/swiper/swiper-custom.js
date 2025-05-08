const swiperEl = document.getElementById("swiperProject");
Object.assign(swiperEl, {
    slidesPerView: 1,
    pagination: {
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 0px
        0: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 640px
        800: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        // when window width is >= 640px
        1300: {
            slidesPerView: 3,
            spaceBetween: 40
        },
    },
});
swiperEl.initialize();