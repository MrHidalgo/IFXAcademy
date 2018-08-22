

/**
 * @name initSwiper
 * @description initialize Swiper
 */
function initSwiper() {
  const mySwiper = new Swiper('.swiper-container.main__swiper', {
    // Optional parameters
    wrapperClass: "swiper-wrapper",
    slideClass: "swiper-slide",
    direction: 'horizontal', // 'horizontal' or 'vertical'
    loop: false,
    watchOverflow: true,
    normalizeSlideIndex: true,
    grabCursor: false,
    freeMode: true,
    speed: 450,
    effect: 'slide', // "slide", "fade", "cube", "coverflow" or "flip"
    slidesPerView: 1,
    spaceBetween: 0,
    // touchMoveStopPropagation:false,
    // simulateTouch : false,
    // allowSwipeToNext: true,
    // allowSwipeToPrev: true,
    // allowPageScroll: "auto ",

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
}
