import Swiper from "swiper";
import 'swiper/css/bundle';
import 'swiper/css/scrollbar'
import {Scrollbar} from "swiper/modules";


export const slider = () => {
  const slider = new Swiper('.slider__sliderContainer', {
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1100: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
    slidesPerView: 1,
    modules: [Scrollbar],
    direction: 'horizontal',
    scrollbar: {
      el: "#normalSliderScrollbar",
      draggable: true,
    }
  })
}
