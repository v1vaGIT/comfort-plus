document.addEventListener("DOMContentLoaded", () => {

  const acc = document.getElementsByClassName("accordionContainer__accordion");

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      const svg = this.getElementsByClassName('accordionContainer__accordionSvgContainer__svg')[0]
      if (panel.style.maxHeight) {
        panel.style.paddingTop = "0"
        panel.style.paddingBottom = "0"
        panel.style.maxHeight = null;
        svg.style.transform = "none";
      } else {
        panel.style.maxHeight = "fit-content";
        panel.style.paddingTop = "40px"
        panel.style.paddingBottom = "40px"
        svg.style.transform = "rotate(180deg)";
      }
    });
  }
})
