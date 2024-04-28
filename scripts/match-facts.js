import {SUBSCRIPTION_LIST} from "./content.js";
import {CONTAINER_BG, DARK_BLOCK} from "./utils.js";
import {match_nav_head, match_nav_links, mutate_latest_news} from "./match-content.js";

export default function mutate_match_facts() {
  try {
    match_nav_head();
    match_nav_links();
    mutate_latest_news();
    mutate_bg();
    mutate_player();
  } catch (error) {
    console.error(error);
  }
}

function mutate_bg() {
  try {
    const NODE = document.querySelector("#page-wrapper > div.cb-col.cb-col-100.cb-bg-white");
    if (!NODE) return;

    NODE.style.backgroundColor = CONTAINER_BG;
    NODE.style.color = "#fff";
  } catch (error) {
    console.error(error);
  }
}

function mutate_player() {
  try {
    const NODE = document.getElementsByClassName("text-hvr-underline");
    if (!NODE || !NODE.length) return;

    for (const elem of NODE) {
      elem.style.color = "#fff";
    }
  } catch (error) {
    console.error(error);
  }
}
