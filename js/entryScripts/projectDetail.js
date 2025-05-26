import {modal} from "../modal/modal";
import {slider} from "../projects/slider/slider";
import {beforeSlider} from "../projectDetailPage/beforeSectionSlider/beforeSlider.mjs";
import '../../css/index.css';
import {beforeAfterSlider} from "../projectDetailPage/beforeAfterSlider/beforeAfterSlider";


document.addEventListener("DOMContentLoaded", () => {
  modal()
  slider()
  beforeSlider()
  // beforeAfterSlider()
})

