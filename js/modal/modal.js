document.addEventListener("DOMContentLoaded", () => {

  const openModal = async () => {
    const burgerMenuModal = document.getElementsByClassName("burgerMenuModal")[0]
    const panel = burgerMenuModal.children[0]
    burgerMenuModal.style.display = "flex"

    setTimeout(() => {
      burgerMenuModal.style.backgroundColor = "#00000066"
      panel.style.transform = "translateX(" + 0 + "px)"
    }, 1)
  }

  const closeModal = async () => {
    const burgerMenuModal = document.getElementsByClassName("burgerMenuModal")[0]
    const panel = burgerMenuModal.children[0]
    burgerMenuModal.style.backgroundColor = "#00000000"
    panel.style.transform = "translateX(" + 100 + "%)"

    setTimeout(() => {
      burgerMenuModal.style.display = "none"
    }, 500)
  }

  const burgerMenuButton = document.getElementsByClassName("menu__burgerMenu")[0]
  const modalCloseButton = document.getElementsByClassName("burgerMenuModal__panel__svgContainer")[0]
  burgerMenuButton.addEventListener("click", openModal)
  modalCloseButton.addEventListener("click", closeModal)
})
