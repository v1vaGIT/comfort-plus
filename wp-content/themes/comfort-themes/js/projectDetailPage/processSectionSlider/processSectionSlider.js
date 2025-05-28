import Swiper from "swiper";
import 'swiper/css/bundle';
import 'swiper/css/scrollbar'
import {Scrollbar} from "swiper/modules";


export const processSlider = () => {
    const sliderElement = document.getElementById('process')
    const slider = new Swiper(sliderElement, {
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
            el: "#processScrollbar",
            draggable: true,
        }
    })
}
