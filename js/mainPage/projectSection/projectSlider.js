document.addEventListener("DOMContentLoaded", () => {
  $('.projectSection__slider').slick({
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    // slide: $('#test'),
    infinite: false,
    variableWidth: false,
  });
})
