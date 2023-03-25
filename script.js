import { animate, scroll } from "https://cdn.skypack.dev/motion";
// from motion dev : https://codesandbox.io/s/motion-one-fade-in-out-on-scroll-692she?from-embed=&file=/index.js

document.querySelectorAll("article > section").forEach((item) => {
  scroll(animate(item, { opacity: [0, 1, 1, 0] }), {
    target: item,
    offset: ["start end", "end end", "start start", "end start"],
  });
});

scroll(
  animate(".intro_text", {
    rotate: -45,
  }),
  { target: document.querySelector("#intro") }
);

// if (window.innerWidth <= 400) {
//   window.addEventListener(
//     "DOMCONTENTLoaded",
//     () => (document.querySelector(".intro_text").style = "")
//   );
// }
