const SLIDER = document.getElementById("slider-dark-mode");
const INPUT = document.getElementById("dark-mode");

(() => {
  chrome.storage.sync.get(["dark_mode"]).then((response) => {
    if (response.dark_mode && response.dark_mode === true) {
      INPUT.setAttribute("checked", true);
    }
  })
})()

SLIDER.addEventListener("click", async (e) => {
  e.preventDefault();
  e.stopPropagation();

  const INPUT = document.getElementById("dark-mode");
  let dark_mode = false;
  if (INPUT && INPUT.checked) {
    INPUT.removeAttribute("checked");
  } else {
    INPUT.setAttribute("checked", true);
    dark_mode = true;
  }
  chrome.storage.sync.set({dark_mode});
});
