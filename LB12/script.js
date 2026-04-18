const swiper = new Swiper(".mySwiper", {
    loop: true,

    slidesPerView: 1,
    spaceBetween: 20,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});