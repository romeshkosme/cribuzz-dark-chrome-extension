import {SUBSCRIPTION_LIST} from "./content.js";
import {CONTAINER_BG, DARK_BLOCK} from "./utils.js";
import {match_nav_head, match_nav_links, mutate_latest_news} from "./match-content.js";

const FIRST_INNING = "innings_1";
const SECOND_INNING = "innings_2";

export default function mutate_score_board() {
  try {
    mutate_container();
    mutate_header();
//    mutate_sub_header();
    match_nav_head();
    match_nav_links();
    mutate_innings(FIRST_INNING);
    mutate_innings(SECOND_INNING);
    mutate_squads();
    mutate_latest_news();
    mutate_match_result();
    subscribe();
  } catch (error) {
    console.error(error);
  }
}

function subscribe() {
  try {
    const callback = (mutation, observer) => {
      // add callback function
      mutate_innings(FIRST_INNING);
      mutate_innings(SECOND_INNING);
      mutate_squads();
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

function mutate_container() {
  try {
    const TARGET = document.querySelector("#page-wrapper > div.cb-col.cb-col-100.cb-bg-white");
    if (!TARGET) return;

    TARGET.style.backgroundColor = CONTAINER_BG;
    TARGET.style.color = "#fff";
  } catch (error) {
    console.error(error);
  }
}

function mutate_header() {
  try {
    const TARGET = document.querySelector("#page-wrapper > div.cb-col.cb-col-100.cb-bg-white > div.cb-nav-main.cb-col-100.cb-col.cb-bg-white");
    if(!TARGET) return;

    TARGET.style.backgroundColor = CONTAINER_BG;
  } catch (error) {
    console.error(error);
    
  }
}

function mutate_sub_header() {
  try {
    const TARGET = document.querySelector("#page-wrapper > div.cb-col.cb-col-100.cb-bg-white > div.cb-nav-main.cb-col-100.cb-col.cb-bg-white > div.cb-nav-subhdr.cb-font-12");
    if (!TARGET) return;

    TARGET.style.color = "#f2f2f2";
  } catch (error) {
    console.error(error);
  }cb-scrd-sub-hdr
}

function mutate_innings(id) {
  try {
    if (!id) return;
    const TARGET = document.getElementById(id);
    if (!TARGET) return;

    const SUB_HEADERS = TARGET.getElementsByClassName("cb-scrd-sub-hdr");

    if (!SUB_HEADERS) return;

    for (const elem of SUB_HEADERS) {
      elem.style.backgroundColor = DARK_BLOCK;
      elem.style.color = "#f2f2f2";
    }

    const SCORE_BRD_ITM = TARGET.getElementsByClassName("cb-text-link");
    if (!SCORE_BRD_ITM || !SCORE_BRD_ITM.length) return;

    for (const elem of SCORE_BRD_ITM) {
      elem.style.color = "#7EBDC3";
    }

    const WICKETS = TARGET.querySelectorAll("div.cb-scrd-itms > div.cb-col > span.text-gray");
    if (!WICKETS || !WICKETS.length) return;

    for (const elem of WICKETS) {
      elem.style.color = "lightgray";
    }
  } catch (error) {
    console.error(error); 
  }
}

function mutate_squads() {
  try {
    const NODES = document.querySelectorAll("a.margin0.text-black.text-hvr-underline");
    if (!NODES) return;

    for (const elem of NODES) {
      elem.style.color = "#f2f2f2";
    }
  } catch (error) {
    console.error(error);
  }
}

function mutate_match_result() {
  try {
    const TARGET = document.querySelector("#page-wrapper > div.cb-col.cb-col-100.cb-bg-white > div.cb-col.cb-col-67.cb-scrd-lft-col.html-refresh.ng-isolate-scope > div.cb-col.cb-scrcrd-status.cb-col-100.cb-text-complete.ng-scope");
    if (!TARGET) return;

    TARGET.style.color = "#F78764";
  } catch (error) {
    console.error(error); 
  }
}
