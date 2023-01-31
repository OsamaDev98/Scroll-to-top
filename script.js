const arrowUp = document.querySelector(".arrow-up");
window.addEventListener("scroll", () => {
  window.scrollY >= 100
    ? arrowUp.classList.add("active")
    : arrowUp.classList.remove("active");
});
