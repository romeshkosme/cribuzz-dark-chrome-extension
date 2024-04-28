import {SUBSCRIPTION_LIST} from "./content.js";
import {CONTAINER_BG, DARK_BLOCK} from "./utils.js";
import {match_nav_head, match_nav_links, mutate_latest_news} from "./match-content.js";

export default function mutate_match_commentary() {
  try {
    match_nav_head();
    match_nav_links();
    mutate_latest_news();
    mutate_content_bg();
  } catch (error) {
    console.error(error);
  }
}

function mutate_bg() {
  try {
    const NODE = document.getElementById("fullcommentary");
    if (!NODE) return;

    NODE.style.backgroundColor = CONTAINER_BG;
    NODE.style.color = "#fff";
  } catch (error) {
    consol.error(error);
  }
}

function mutate_content_bg() {
  try {
    const NODE = document.querySelector("#fullcommentary > div.cb-col-100.cb-col.cb-bg-white.cb-col-rt");
    if (!NODE) return;

    NODE.style.backgroundColor = CONTAINER_BG;
    NODE.style.color = "#fff";
  } catch (error) {
    console.error(error);
  }
}
