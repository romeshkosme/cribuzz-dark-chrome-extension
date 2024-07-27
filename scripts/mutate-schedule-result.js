import {SUBSCRIPTION_LIST} from "./content.js";
import {CONTAINER_BG, DARK_BLOCK} from "./utils.js";
import {match_nav_head, match_nav_links} from "./match-content.js";

export default function mutate_schedule_result() {
  try {
    match_nav_head();
    match_nav_links();
    mutate_bg();
    mutate_schedule_table_header();
    mutate_match_block();
    mutate_match_count_length();
    subscribe();
  } catch (error) {
    console.error(error);
  }
}

function subscribe() {
  try {
    const TARGET = document.querySelector("#page-wrapper > div.cb-bg-white.cb-col-100.cb-col.cb-hm-rght.cb-series-filters");
    if (!TARGET) return;

    const callback = (mutation, observer) => {
      mutate_schedule_table_header();
      mutate_match_block();
      mutate_match_count_length();
    }

    const observer = new MutationObserver(callback);

    observer.observe(TARGET, { attributes: true, childList: true, subtree: true });

    SUBSCRIPTION_LIST.push(observer);
  } catch (error) {
    console.log(error);
  }
}

function mutate_bg() {
  try {
    const NODE = document.querySelector("#page-wrapper > div.cb-bg-white.cb-col-100.cb-col.cb-hm-rght.cb-series-filters");
    if (!NODE) return;

    NODE.style.backgroundColor = CONTAINER_BG;
    NODE.style.color = "#fff";
  } catch (error) {
    console.error(error);
  }
}

function mutate_schedule_table_header() {
  try {
    const NODE = document.querySelector("#series-matches > div.cb-col-100.cb-col.cb-srs-gray-strip");
    if (!NODE) return;

    NODE.style.backgroundColor = DARK_BLOCK;
    NODE.style.color = "#fff";
  } catch (error) {
    console.error(error)
  }
}

function mutate_match_block(){
  try {
    const NODE = document.querySelectorAll(".cb-srs-mtchs-tm");
    if (!NODE) return;

    for (const elem of NODE) {
      const match_link = elem.querySelector("a.text-hvr-underline")
      if (match_link) match_link.style.color = "#fff";

      const match_location = elem.querySelector("div.text-gray");
      if (match_location) match_location.style.color = "lightgray";

      const match_complete = elem.querySelector("a.cb-text-complete");
      if (match_complete) match_complete.style.color = "#7ebdc3"

      const match_preview = elem.querySelector("a.cb-text-preview");
      if (match_preview) match_preview.style.color = "#f78764";

      const match_upcoming = elem.querySelector("a.cb-text-upcoming");
      if (match_upcoming) match_upcoming.style.color = "#f78764";

      const match_inprogress = elem.querySelector("a.cb-text-inprogress");
      if (match_inprogress) match_inprogress.style.color = "#e63946";
    }
  } catch (error) {
    console.error(error)
  }
}

export function mutate_match_count_length() {
  try {
    const NODE = document.querySelector("#page-wrapper > div.cb-col-100.cb-col.cb-nav-main.cb-bg-white > div");
    if (!NODE) return;

    NODE.style.color = "lightgray";
  } catch (error) {
    console.error(error);
  }
}
