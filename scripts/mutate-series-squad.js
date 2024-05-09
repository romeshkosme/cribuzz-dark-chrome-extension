import {SUBSCRIPTION_LIST} from "./content.js";
import {CONTAINER_BG, DARK_BLOCK} from "./utils.js";
import {match_nav_head, match_nav_links, mutate_latest_news, mutate_latest_photos} from "./match-content.js";
import {mutate_match_count_length} from "./mutate-schedule-result.js";

export default function mutate_series_squad() {
  try {
    match_nav_head()
    match_nav_links()
    mutate_match_count_length()
    mutate_container_bg()
    mutate_player_text()
    mutate_country_list()
    subscribe();
  } catch (error) {
    console.error(error)
  }
}

function subscribe() {
  const TARGET = document.querySelector("#page-wrapper > div.cb-col-100.cb-col.cb-srs-sqd-box > div > div")
  if (TARGET) {
    const callback = (mutation, observer) => {
      mutate_country_list()
      mutate_player_text()
    }

    const observer = new MutationObserver(callback);

    observer.observe(TARGET, { attributes: true, childList: true, subtree: true})

    SUBSCRIPTION_LIST.push(observer);
  }
}

function mutate_container_bg() {
  try {
    const NODE = document.querySelector("#page-wrapper > div.cb-col-100.cb-col.cb-srs-sqd-box > div")
    if (!NODE) return

    NODE.style.backgroundColor = CONTAINER_BG;
    NODE.style.color = "#fff";
  } catch (error) {
    console.error(error)
  }
}

function mutate_player_text() {
  try {
    const NODE = document.getElementById("squadPlayers");
    if (!NODE) return;

    const LINKS = NODE.querySelectorAll("a");

    for (const link of LINKS) {
      link.style.color = "#fff"

      const ROLE = link.querySelector(".cb-text-gray");
      ROLE.style.color = "lightgray"
    }
  } catch (error) {
    console.error(error)
  }
}

function mutate_country_list() {
  try {
    const NODE = document.querySelector("#page-wrapper > div.cb-col-100.cb-col.cb-srs-sqd-box > div > div > div.cb-col.cb-col-20")
    if (!NODE) return

    for (const link of NODE.children) {
      link.style.color = "#fff";
      if (link.classList.contains("cb-stats-lft-tab-active")) {
        link.style.backgroundColor = DARK_BLOCK
      } else {
        link.style.backgroundColor = CONTAINER_BG
      }
    }
  } catch (error) {
    console.error(error);
    
  }
}
