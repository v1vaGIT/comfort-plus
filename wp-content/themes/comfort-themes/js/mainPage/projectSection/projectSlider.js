import Swiper from "swiper";
import 'swiper/css/bundle';
import 'swiper/css/scrollbar'
import {Scrollbar} from "swiper/modules";


export const projectSlider = () => {
  const slider = new Swiper('.projectSection__sliderContainer', {
    breakpoints: {
      300: {
        slidesPerView: 2,
      },
      500: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
    slidesPerView: 2,
    modules: [Scrollbar],
    direction: 'horizontal',
    scrollbar: {
      el: ".projectSection__scrollbar",
      draggable: true,
    }
  })
}
