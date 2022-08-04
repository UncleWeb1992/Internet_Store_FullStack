export function handleScroll() {
  window.addEventListener("scroll", () => {
    const arrow = document.querySelector(".scrollUp");
    if (arrow) {
      if (window.scrollY > 600) {
        arrow.classList.remove("hide");
      } else {
        arrow.classList.add("hide");
      }
    }
  });
}
