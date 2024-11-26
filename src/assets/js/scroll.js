// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

const links = Array.from(document.getElementsByClassName("anchorlink"));
const star = document.getElementById("rotator");
const star2 = document.getElementById("rotator2");
const hamburger = document.getElementById("hamburger");

links[0].addEventListener("click", () => {
  lenis.scrollTo("#portfolio", { offset: -80 });
  // hamburger.ariaExpanded = "false";
});
links[1].addEventListener("click", () => {
  lenis.scrollTo("#about", { offset: -80 });
  // hamburger.ariaExpanded = "false";
});
links[2].addEventListener("click", () => {
  lenis.scrollTo("#contact");
  // hamburger.ariaExpanded = "false";
});

hamburger.addEventListener("click", () => {
  lenis.scrollTo("body");
  // hamburger.ariaExpanded = hamburger.ariaExpanded !== "true";
});

// Listen for the scroll event and log the event data
lenis.on("scroll", (e) => {
  let factor = e.animatedScroll / 10.0;
  star.style.transform = `rotate(${factor}deg)`;
  star2.style.transform = `rotate(${factor}deg)`;
  if (e.animatedScroll > 700) {
    hamburger.classList.remove("hamburger-hidden");
  } else {
    hamburger.classList.add("hamburger-hidden");
  }
  // checkLinks(e.animatedScroll);
});

const hiddenElements = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      hiddenElements.forEach((el) => el.classList.remove("show"));
      entry.target.classList.add("show");

      switch (entry.target.id) {
        case "portfolio":
          links.forEach((e) => {
            e.classList.remove("active");
          });
          links[0].classList.add("active");
          break;

        case "about":
          links.forEach((e) => {
            e.classList.remove("active");
          });
          links[1].classList.add("active");
          break;

        default:
          links.forEach((e) => {
            e.classList.remove("active");
            // console.log(e);
          });
          links[2].classList.add("active");
      }
    } else {
      // entry.target.classList.remove("show");
    }
  });
});

hiddenElements.forEach((el) => observer.observe(el));
