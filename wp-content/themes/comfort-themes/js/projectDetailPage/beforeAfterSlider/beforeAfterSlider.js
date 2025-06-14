export const beforeAfterSlider = () => {
  const slider = new juxtapose.JXSlider("#beforeAfterSlider", [
    {
      src: projectFields.beforeImage,
      label: 'Before',
    },
    {
      src: projectFields.afterImage,
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
