import Swiper from "swiper";
import 'swiper/css/bundle';
import 'swiper/css/scrollbar'
import {Scrollbar} from "swiper/modules";


export const slider = (element, scrollbar) => {

  const slider = new Swiper(element, {
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
    watchOverflow: false,
    modules: [Scrollbar],
    direction: 'horizontal',
    scrollbar: {
      el: scrollbar,
      draggable: true,
    }
  })
}
