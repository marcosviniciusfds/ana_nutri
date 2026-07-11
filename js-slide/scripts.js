document.querySelectorAll('.box').forEach((box) => {

    const thumbsEl = box.querySelector('.slide-thumbnail');
    const mainEl = box.querySelector('.slide-imagens');

    const thumbsSwiper = new Swiper(thumbsEl, {
        spaceBetween: 10,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesProgress: true,
        slideToClickedSlide: true,
        breakpoints: {
            0: { slidesPerView: 3 },
            480: { slidesPerView: 4 },
            768: { slidesPerView: 5 }
        },
        on: {
            click: function (swiper) {
                const clickedIndex = swiper.clickedIndex;
                const slidesPerView = swiper.params.slidesPerView;
                if (clickedIndex === undefined) return;

                const lastVisibleIndex = swiper.activeIndex + slidesPerView - 1;

                if (clickedIndex === lastVisibleIndex) swiper.slideNext();
                if (clickedIndex === swiper.activeIndex) swiper.slidePrev();
            }
        }
    });

    const mainSwiper = new Swiper(mainEl, {
        spaceBetween: 10,
        loop: true,
        thumbs: {
            swiper: thumbsSwiper
        }
    });

});