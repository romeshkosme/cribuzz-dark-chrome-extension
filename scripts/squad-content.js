import {SUBSCRIPTION_LIST} from "./content.js";
import {CONTAINER_BG, DARK_BLOCK} from "./utils.js";
import {match_nav_head, match_nav_links, mutate_latest_news} from "./match-content.js";

export default function mutate_match_squad() {
  try {
    mutate_bg();
    match_nav_head();
    match_nav_links();
    mutate_player_list();
    subscribe();
  } catch (error) {
    console.error(error);
  }
}

function subscribe() {
  try {
    const callback = (mutation, observer) => {
      // add callback function
      mutate_player_list();
      mutate_team_header();
    }

    const TARGET = document.getElementById("page-wrapper");
    if (!TARGET) return;

    const observer = new MutationObserver(callback);

    observer.observe(TARGET, { attributes: true, childList: true, subtree: true });

    SUBSCRIPTION_LIST.push(observer);

  } catch (error) {
    console.error(error); 
  }
}

function mutate_bg() {
  try {  
    const NODE = document.querySelector("#page-wrapper > div.cb-col.cb-col-100.cb-bg-white");

    if (!NODE) throw new Error("Squad container bg not found!")

    NODE.style.backgroundColor = CONTAINER_BG;
    NODE.style.color = "#f2f2f2";
  } catch (error) {
    console.error(error);
  }
}

function mutate_player_list() {
  try {
    const NODE_LEFT = document.getElementsByClassName("cb-player-card-left");
    const NODE_RIGHT = document.getElementsByClassName("cb-player-card-right");

    for (const elem of NODE_LEFT) {
      elem.style.color = "#fff";
      if (elem.classList.contains("cb-bg-player-in") || elem.classList.contains("cb-bg-player-out")) {
        elem.classList.remove("cb-bg-player-in");
        elem.classList.remove("cb-bg-player-out");
      }
      const role = elem.querySelector(".text-gray");
      if (!role) continue;
      role.style.color = "#f2f2f2";
    }

    for (const elem of NODE_RIGHT) {
      elem.style.color = "#fff";
      if (elem.classList.contains("cb-bg-player-in") || elem.classList.contains("cb-bg-player-out")) {
        elem.classList.remove("cb-bg-player-in");
        elem.classList.remove("cb-bg-player-out");
      }
      const role = elem.querySelector(".text-gray");
      if (!role) continue;
      role.style.color = "#f2f2f2";
    }
  } catch (error) {
    console.error(error)
  }
}

function mutate_team_header() {
  try {
    const NODE = document.querySelector("#page-wrapper > div.cb-col.cb-col-100.cb-bg-white > div.cb-col.cb-col-67.cb-sqds-lft-col.html-refresh.ng-isolate-scope > div.cb-col.cb-col-100.cb-teams-hdr.text-bold.pad10.ng-scope");

    if (!NODE) throw new Error("Squad team header not found!")

    NODE.style.background = DARK_BLOCK;
    const TEAMS = NODE.querySelectorAll("a");

    if (!TEAMS) return;
    TEAMS[0].style.color = "#f2f2f2";
    TEAMS[1].style.color = "#f2f2f2";
  } catch (error) {
    console.error(error);
  }
}
