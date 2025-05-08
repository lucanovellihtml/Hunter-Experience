const swiperElIntroEvents = document.getElementById("swiperIntroEvents");
Object.assign(swiperElIntroEvents, {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, 0, -400],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
});
swiperElIntroEvents.initialize();