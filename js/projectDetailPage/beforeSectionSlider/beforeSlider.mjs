import Swiper from "swiper";
import 'swiper/css/bundle';
import 'swiper/css/scrollbar'
import {Scrollbar} from "swiper/modules";


export const beforeSlider = () => {
  const slider = new Swiper('.detailBeforeSectionContent__slider', {
    breakpoints: {
      1100: {
        enabled: false
      },
      800: {
        slidesPerView: 2,
      },
    },
    slidesPerView: 1,
    modules: [Scrollbar],
    direction: 'horizontal',
    scrollbar: {
      el: "#before",
      draggable: true,
    }
  })
}
