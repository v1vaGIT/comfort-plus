export const beforeAfterSlider = () => {
  const slider = new juxtapose.JXSlider("#juxtapose", [
    {
      src: './img/offersPage/header/0d639a5929bfc95a9168b8bd40ad033e.png',
      label: sliderData.before,
    },
    {
      src: sliderData.after,
      label: 'After',
    }
  ], {
    animate: true,
    showLabels: false,
    showCredits: false,
    startingPosition: "50%",
    makeResponsive: true
  })
}
