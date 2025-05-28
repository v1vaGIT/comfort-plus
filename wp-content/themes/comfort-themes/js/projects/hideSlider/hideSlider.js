import Swiper from "swiper";
import 'swiper/css/bundle';
import 'swiper/css/scrollbar'
import {Scrollbar} from "swiper/modules";


export const hideSlider = () => {
  const slider = new Swiper('.hideSlider__sliderContainer', {
    breakpoints: {
      768: {
        slidesPerView: 2,
        enabled: true,
      },
      900: {
        slidesPerView: 3,
        enabled: true,
      },
      1200: {
        slidesPerView: 4,
        enabled: true,
      },
    },
    enabled: false,
    modules: [Scrollbar],
    direction: 'horizontal',
    scrollbar: {
      el: "#hideScrollbar",
      draggable: true,
    }
  })
}
