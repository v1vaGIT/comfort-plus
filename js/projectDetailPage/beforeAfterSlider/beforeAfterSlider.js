import 'juxtaposejs/build/js/juxtapose.min.js';
import 'juxtaposejs/build/css/juxtapose.css';

export const beforeAfterSlider = () => {
  const slider = new juxtapose.JXSlider("#juxtapose", [
    {
      src: './img/offersPage/header/0d639a5929bfc95a9168b8bd40ad033e.png',
      label: 'Before',
    },
    {
      src: './img/offersPage/flatSection/comfort/54acf5ddebe93543ac877988fdc48cd1.png',
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
