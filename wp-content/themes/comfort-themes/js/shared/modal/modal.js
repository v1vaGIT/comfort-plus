export const modal = () => {
  const onBurgerButtonClick = async () => {
    const burgerModal = document.getElementsByClassName("burgerMenuModal")[0]
    const panel = document.getElementsByClassName("burgerMenuModal__panel")[0]
    const burgerMenuButton = document.getElementsByClassName("modalButton__icon")[0]
    burgerModal.classList.toggle("_active")
    panel.classList.toggle("_active")
    burgerMenuButton.classList.toggle("_active")
  }

  const burgerMenuButton = document.getElementsByClassName("modalButton")[0]
  const burgerMenuModal = document.getElementsByClassName("burgerMenuModal")[0]
  burgerMenuButton.addEventListener("click", onBurgerButtonClick)
  burgerMenuModal.addEventListener("click", (event) => {
    if (event.target !== burgerMenuModal) {return}
    onBurgerButtonClick()
  })
}
