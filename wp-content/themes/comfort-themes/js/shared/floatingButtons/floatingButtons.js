export const floatingButtons = () => {
    const contactButton = document.getElementsByClassName("hiddenButtons__contactButtonContainer__button")[0]
    const scrollButton = document.getElementsByClassName("hiddenButtons__scrollToTopButton")[0]

    const controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger"
    }).setClassToggle(".hiddenButtons", "_visible")
    controller.addScene(scene);

    //contact button event
    contactButton.addEventListener("click", () => {
        document.getElementsByClassName("hiddenButtons__contactButtonContainer")[0].classList.toggle("_active")
        document.getElementsByClassName("hiddenButtons__contactButtonContainer__panel")[0].classList.toggle("_active")
        contactButton.classList.toggle("_active")
    })
    scrollButton.addEventListener("click", () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    })
}