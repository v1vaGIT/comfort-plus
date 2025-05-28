import {modal} from "../modal/modal";
import {sectionSlider} from "../projects/sectionSlider/sectionSlider";

document.addEventListener("DOMContentLoaded", () => {
  modal()
  document.querySelectorAll(".sectionInfo").forEach(function (el) {
    const twoPhotoSlider = el.querySelector(".scrollSliderSectionContent__slider")
    const scrollbar = el.querySelector(".scrollSliderSectionContent__scrollbar")
    sectionSlider(twoPhotoSlider, scrollbar)
  })
  // sectionSlider('#slider1', '#scrollbar1')
})
