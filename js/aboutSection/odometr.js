// const speed = 300
//
// const checkElementsInViewport = (el) => {
//   const elementTop = el.offsetTop;
//   const elementBottom = elementTop
//     + el.offsetHeight;
//   const viewportTop = window.pageYOffset;
//   const viewportBottom = viewportTop
//     + window.innerHeight;
//
//   return (
//     elementBottom > viewportTop &&
//     elementTop < viewportBottom
//   );
// }

// const onScrollCounter = () => {
//   const sectionStats = document.getElementsByClassName("sectionStats")
//   const statContainers = document.querySelectorAll('[data-target]');
//   if (checkElementsInViewport(sectionStats[0])) {
//     statContainers.forEach((counter) => {
//       const updateCount = () => {
//         const target = +counter.getAttribute('data-target');
//         const count = +counter.innerText.substring(0, counter.innerText.length-1);
//         const symphol = counter.innerText.substring(counter.innerText.length-1, counter.innerText.length);
//         console.log(target, count, typeof symphol)
//         // Lower inc to slow and higher to slow
//         const inc = target / speed;
//
//         // Check if target is reached
//         if (count < target) {
//           // Add inc to count and output in counter
//           counter.innerText = Math.ceil(count + inc) + symphol;
//           // Call function every ms
//           setTimeout(updateCount, 1);
//         } else {
//           counter.innerText = target + symphol;
//         }
//       };
//
//       updateCount();
//       document.removeEventListener("wheel", onScrollCounter)
//     })
//   }
// }
// const onScrollCounter = () => {
//   const sectionStats = document.getElementsByClassName("sectionStats")
//   const vpc = new ViewportChecker('.sectionStats')
// }

document.addEventListener("DOMContentLoaded", () => {
  // const statContainers = document.querySelectorAll('[data-target]');
  // od1 = new Odometer({
  //   el: statContainers[0],
  //   format: 'd',
  // })
  // od1.update(10)
})
