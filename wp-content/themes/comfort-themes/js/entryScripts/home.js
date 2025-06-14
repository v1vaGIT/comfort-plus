import {modal} from "../shared/modal/modal";
import {projectSlider} from "../mainPage/projectSection/projectSlider";
import {feedbackSlider} from "../mainPage/feedbackSection/feedbackSlider";
import {form} from "../mainPage/form/form";
import {floatingButtons} from "../shared/floatingButtons/floatingButtons";

document.addEventListener("DOMContentLoaded", () => {
  modal()
  floatingButtons()
  form()
  projectSlider()
  feedbackSlider()
})
