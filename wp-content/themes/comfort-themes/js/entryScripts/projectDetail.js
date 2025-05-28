import {modal} from "../modal/modal";
import {slider} from "../projects/slider/slider";
import {beforeSlider} from "../projectDetailPage/beforeSectionSlider/beforeSlider.js";
import {beforeAfterSlider} from "../projectDetailPage/beforeAfterSlider/beforeAfterSlider";
import {processSlider} from "../projectDetailPage/processSectionSlider/processSectionSlider";


document.addEventListener("DOMContentLoaded", () => {
  const afterSlider = document.getElementsByClassName("slider__sliderContainer")[0]
  const afterScrollbar = document.getElementById("normalSliderScrollbar")
  modal()
  beforeSlider()
  processSlider()
  slider(afterSlider, afterScrollbar)
  // beforeAfterSlider()
})

