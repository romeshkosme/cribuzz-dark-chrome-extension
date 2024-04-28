import {SUBSCRIPTION_LIST} from "./content.js";
import {CONTAINER_BG, DARK_BLOCK} from "./utils.js";
import {match_nav_head, match_nav_links, mutate_latest_news, mutate_latest_photos} from "./match-content.js";

export default function mutate_match_highlight() {
  try {
    match_nav_head();
    match_nav_links();
    mutate_latest_news();
    mutate_latest_photos();
    mutate_bg();
    mutate_highlight_nav();
  } catch (error) {
    console.log(error);
  }
}

function mutate_bg() {
  try {
    const NODE = document.querySelector("#highlightsCenter")
    if (!NODE) return;

    NODE.style.backgroundColor = CONTAINER_BG;
    NODE.style.color = "#fff";
  } catch (error) {
    console.log(error)
  }
}

function mutate_highlight_nav() {
  try {
    const NODE = document.querySelector("#highlightsCenter > div.cb-col.cb-col-67.cb-nws-lft-col > div > nav.cb-hig-nv-br");
    if (!NODE) return;

    NODE.style.backgroundColor = DARK_BLOCK;
    NODE.style.color = "#f2f2f2";

    for (const elem of NODE.children) {
      elem.style.color = "#f2f2f2";
      if (elem.classList.contains("active")) {
        elem.style.color = DARK_BLOCK;
      }
      elem.addEventListener("mouseenter", navHoverEnterCb)
      elem.addEventListener("mouseleave", navHoverLeaveCb)
    }

    function navHoverEnterCb(e) {
      e.target.style.backgroundColor = CONTAINER_BG;
      e.target.style.color = "#f2f2f2";
    }

    function navHoverLeaveCb(e) {
      e.target.style.backgroundColor = DARK_BLOCK;
      e.target.style.color = "#f2f2f2";
    }
  } catch (error) {
    console.error(error)
  }
}
