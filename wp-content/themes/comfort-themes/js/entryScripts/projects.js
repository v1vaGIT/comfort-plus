import {modal} from "../modal/modal";
import {sectionSlider} from "../projects/sectionSlider/sectionSlider";
import {slider} from "../projects/slider/slider";
import {hideSlider} from "../projects/hideSlider/hideSlider";

document.addEventListener("DOMContentLoaded", () => {
  modal()
  document.querySelectorAll(".sectionInfo").forEach(function (el) {
    const twoPhotoSlider = el.querySelector(".scrollSliderSectionContent__slider")
    const scrollbar = el.querySelector(".scrollSliderSectionContent__scrollbar")
    sectionSlider(twoPhotoSlider, scrollbar)
  })
  document.querySelectorAll("section").forEach(function (el) {
    const sliderElement = el.querySelector(".slider__sliderContainer")
    const scrollbar = el.querySelector(".slider__scrollbar")
    slider(sliderElement, scrollbar)
  })

  // hideSlider()
})

