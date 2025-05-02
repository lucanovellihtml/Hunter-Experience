const swiperEl = document.getElementById("swiperHavana");
Object.assign(swiperEl, {
    pagination: {
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1300: {
            slidesPerView: 4,
            spaceBetween: 20
        },
    },
});
swiperEl.initialize();