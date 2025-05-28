import {CountUp} from "countup.js";

export const odometer = () => {
  const numbersSection = document.getElementsByClassName("sectionStats__statContainer")[0];
  const numbers = document.getElementsByClassName("odometerNumber")
  let odometer1 = new CountUp(numbers[0], 10, {
    duration: 3,
    suffix: '+'
  });
  let odometer2 = new CountUp(numbers[1], 99, {
    duration: 3,
    suffix: '%'
  });
  let odometer3 = new CountUp(numbers[2], 200, {
    duration: 3,
    suffix: '+'
  });
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        odometer1.start()
        odometer2.start()
        odometer3.start()
        obs.unobserve(entry.target)
      }
    });
  });

  observer.observe(numbersSection);
}
