import {modal} from "../shared/modal/modal";
import {sectionSlider} from "../projects/sectionSlider/sectionSlider";
import {floatingButtons} from "../shared/floatingButtons/floatingButtons";

document.addEventListener("DOMContentLoaded", () => {
  modal()
  document.querySelectorAll(".sectionInfo").forEach(function (el) {
    const twoPhotoSlider = el.querySelector(".scrollSliderSectionContent__slider")
    const scrollbar = el.querySelector(".scrollSliderSectionContent__scrollbar")
    sectionSlider(twoPhotoSlider, scrollbar)
  })
  floatingButtons()
})
