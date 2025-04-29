import Swiper from "swiper";
import 'swiper/css/bundle';
import 'swiper/css/scrollbar'
import {Scrollbar} from "swiper/modules";

export const sectionSlider = (element, scrollbar) => {
  const slider = new Swiper(element, {
    breakpoints: {
      1300: {
        enabled: false,
        slidesPerView: 2,
      },
    },
    enabled: true,
    slidesPerView: 1,
    modules: [Scrollbar],
    direction: 'horizontal',
    scrollbar: {
      el: scrollbar,
      draggable: true,
    }
  })
}
