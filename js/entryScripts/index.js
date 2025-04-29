import {modal} from "../modal/modal";
import {projectSlider} from "../mainPage/projectSection/projectSlider";
import '../../css/index.css';
import {feedbackSlider} from "../mainPage/feedbackSection/feedbackSlider";
import {odometer} from "../mainPage/aboutSection/odometer";

document.addEventListener("DOMContentLoaded", () => {
  modal()
  odometer()
  projectSlider()
  feedbackSlider()
})
