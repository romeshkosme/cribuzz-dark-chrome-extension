const SLIDER = document.getElementById("slider-dark-mode");

SLIDER.addEventListener("click", (e) => {
  console.log("one")
  e.preventDefault();
  e.stopPropagation();

  const INPUT = document.getElementById("dark-mode");

  if (INPUT && INPUT.checked) {
    INPUT.removeAttribute("checked");
  } else {
    INPUT.setAttribute("checked", true);
  }
});
