const MATCH_CARD_BG = "#4a4a4a";

function main() {
  const BG_GRAY = "#202124";
  const BODY = document.getElementsByTagName("body");
  BODY[0].style.backgroundColor = BG_GRAY;
}

const HOME_MATCHES_ELEM = document.getElementsByClassName("cb-match-card");

function homeMatchList() {
  for (const item of HOME_MATCHES_ELEM) {
    item.style.backgroundColor = MATCH_CARD_BG;
  }
}
main();

const TARGET = document.getElementById("match_menu_container");
if (TARGET) {
  const callback = (mutation, observer) => {
    homeMatchList();
  }

  const observer = new MutationObserver(callback);

  observer.observe(TARGET, { attributes: true, childList: true, subtree: true})
}
