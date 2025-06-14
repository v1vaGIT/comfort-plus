import {modal} from "../shared/modal/modal";
import {slider} from "../projects/slider/slider";
import {beforeSlider} from "../projectDetailPage/beforeSectionSlider/beforeSlider.js";
import {beforeAfterSlider} from "../projectDetailPage/beforeAfterSlider/beforeAfterSlider";
import {processSlider} from "../projectDetailPage/processSectionSlider/processSectionSlider";
import {floatingButtons} from "../shared/floatingButtons/floatingButtons";


document.addEventListener("DOMContentLoaded", () => {
  const afterSlider = document.getElementsByClassName("slider__sliderContainer")[0]
  const afterScrollbar = document.getElementById("afterScrollbar")
  modal()
  beforeSlider()
  processSlider()
  slider(afterSlider, afterScrollbar)
  beforeAfterSlider()
  floatingButtons()
})

