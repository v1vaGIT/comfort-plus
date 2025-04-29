import {modal} from "../modal/modal";
import {sectionSlider} from "../projects/sectionSlider/sectionSlider";
import '../../css/index.css';
import {slider} from "../projects/slider/slider";
import {hideSlider} from "../projects/hideSlider/hideSlider";

document.addEventListener("DOMContentLoaded", () => {
  modal()
  sectionSlider("#slider1", "#scrollbar1")
  sectionSlider("#slider2", "#scrollbar2")
  sectionSlider("#slider3", "#scrollbar3")
  sectionSlider("#slider4", "#scrollbar4")
  slider()
  hideSlider()
})

