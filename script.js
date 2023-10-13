const previous = document.getElementById("previousSlide");
const next = document.getElementById("nextSlide");
const choice = document.querySelector(".presentation .chapter:first-child")
var count = 0;

previous.addEventListener("click", (e) => {
  if (count != 0) --count;
  choice.style.transform = "translateX(" + (-100 * count) + "vw)";
})

next.addEventListener("click", (e) => {
  ++count;
  choice.style.transform = "translateX(" + (-100 * count) + "vw)";
})

