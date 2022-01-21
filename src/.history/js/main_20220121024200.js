var hotelSwiper = new Swiper('.hotel-swiper', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-swiper__button--next',
    prevEl: '.hotel-swiper__button--prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

});

var reviewsSwiper = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider_button--next',
    prevEl: '.reviews-slider_button--prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

});


