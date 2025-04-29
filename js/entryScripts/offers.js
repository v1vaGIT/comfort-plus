import {modal} from "../modal/modal";
import {sectionSlider} from "../projects/sectionSlider/sectionSlider";
import '../../css/index.css';

document.addEventListener("DOMContentLoaded", () => {
  modal()
  sectionSlider('#slider1', '#scrollbar1')
})
