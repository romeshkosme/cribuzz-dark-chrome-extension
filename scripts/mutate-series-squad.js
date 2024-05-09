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
  } catch (error) {
    console.error(error)
  }
}

function mutate_container_bg() {
  try {
    const NODE = document.querySelector("#page-wrapper > div.cb-col-100.cb-col.cb-srs-sqd-box > div")
    if (!NODE) return
   console.log("NODE", NODE) 
    NODE.style.backgroundColor = CONTAINER_BG;
    NODE.style.color = "#fff";
  } catch (error) {
    console.error(error)
  }
}
