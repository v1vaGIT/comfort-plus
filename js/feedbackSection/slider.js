document.addEventListener("DOMContentLoaded", () => {
  $('.feedbackSection__sliderContainer__slider').slick({
    slidesToShow: 1,
    prevArrow: $('.prev'),
    nextArrow: $('.next')
  });
})
