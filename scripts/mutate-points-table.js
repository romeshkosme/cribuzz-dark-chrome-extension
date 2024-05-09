import {SUBSCRIPTION_LIST} from "./content.js";
import {CONTAINER_BG, DARK_BLOCK} from "./utils.js";
import {match_nav_head, match_nav_links, mutate_latest_news, mutate_latest_photos} from "./match-content.js";
import {mutate_match_count_length} from "./mutate-schedule-result.js";

export default function mutate_points_table() {
  try {
    match_nav_head();
    match_nav_links();
    mutate_latest_news();
    mutate_bg();
    mutate_table();
    mutate_match_count_length();
  } catch (error) {
    console.error(error)
  }
}

function mutate_bg() {
  try {
    const NODE = document.querySelector("#page-wrapper > div:nth-child(7)");
    if (!NODE) return;

    NODE.style.backgroundColor = CONTAINER_BG;
    NODE.style.color = "#fff";
  } catch (error) {
    console.error(error)
  }
}

function mutate_table() {
  try {
    const TABLES = document.querySelectorAll("table.table.cb-srs-pnts");

    for (const table of TABLES) {
      const HEADER = table.querySelector("thead > tr")
      mutate_table_header(HEADER)

      const TBODY = table.querySelector("tbody");
      mutate_team_link(TBODY);

      mutate_sub_table(TBODY);
    }
  } catch (error) {
    console.error(error)
  }
}

function mutate_table_header(NODE) {
  try {
    NODE.style.backgroundColor = DARK_BLOCK;
    NODE.style.color = "#f2f2f2";

    for (const elem of NODE.children) {
      elem.style.color = "#fff";
    }
  } catch (error) {
    console.error(error)
  }
}

function mutate_team_link(NODE) {
  try {
    const LINKS = document.querySelectorAll("a.cb-text-link")
    if (!LINKS) return

    for (const elem of LINKS) {
      elem.style.color = "#fff";
    }
  } catch (error) {
    console.error(error)
  }
}

function mutate_sub_table(TBODY) {
  try {
    const SUB_TABLES = TBODY.querySelectorAll("table.table.cb-srs-pnts-dwn-tbl")
    if (!SUB_TABLES) return

    for (const table of SUB_TABLES) {
      table.style.backgroundColor = CONTAINER_BG
    }
  } catch (error) {
    console.error(error)
  }
}
