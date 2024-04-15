import {SUBSCRIPTION_LIST} from "./content.js";

export default function live_score_page() {
  match_bg();
  match_nav_head();
  match_nav_links();
  match_commentary();
  mutate_mini_score_board();
  mutate_key_stats();
  mutate_recent();
  mutate_over_summary();
  mutate_live_score();
  mutate_run_rate();
  mutate_match_inprogress();
  mutate_toss_decision();
  mutate_batter();
  mutate_bowler();
  mutate_latest_news();
  mutate_latest_photos();
  mutate_match_result();
  mutate_mom();
  mutate_bowling_score();
  subscribe();
}

function subscribe() {
  const TARGET = document.querySelector("#matchCenter > div.cb-col.cb-col-67.cb-nws-lft-col.cb-comm-pg");
  if (!TARGET) return;

  const callback = (mutation, observer) => {
    mutate_mini_score_board();
    mutate_key_stats();
    mutate_recent();
    mutate_over_summary();
    mutate_live_score();
    mutate_run_rate();
    mutate_match_inprogress();
    mutate_toss_decision();
    mutate_batter();
    mutate_bowler();
    mutate_match_result();
    mutate_mom();
    mutate_bowling_score();
  }

  const observer = new MutationObserver(callback);

  observer.observe(TARGET, { attributes: true, childList: true, subtree: true });

  SUBSCRIPTION_LIST.push(observer);
}

function match_bg() {
  const TARGET = document.getElementById("matchCenter");
  TARGET.style.backgroundColor = "#4a4a4a";
}

export function match_nav_head() {
  const TARGET = document.getElementsByClassName("cb-nav-main");

  if (TARGET && TARGET.length && TARGET.length === 1) {
    TARGET[0].style.backgroundColor = "#4a4a4a";

    const H1 = TARGET[0].querySelectorAll("h1");
    H1[0].style.color = "#fff";

    const NAV_SUB_HDR = TARGET[0].querySelectorAll(".cb-nav-subhdr");

    if (NAV_SUB_HDR && NAV_SUB_HDR.length) {
      for (const elem of NAV_SUB_HDR) {
        elem.style.color = "lightgray";
        const LINKS = elem.querySelectorAll("a");

        if (LINKS && LINKS.length) {
          for (const elem of LINKS) {
            elem.children[0].style.color = "#fff"
          }
        }
        elem.children[1].children[0].style.color = "#fff";
      }
    }
  } else {
    console.warning("Match nav head not handled.")
  }
}

export function match_nav_links() {
  const NODES = document.querySelectorAll(".cb-nav-bar > a.cb-nav-tab");

  for (const elem of NODES) {
    if (!elem.classList.contains("active")) {
      elem.style.color = "#f2f2f2";
    } else {
      elem.style.color= "#009270";
      elem.style.borderColor = "#009270";
    }
  }
}

function match_commentary() {
  const TARGET = document.getElementsByClassName("cb-nws-lft-col");
//  console.log("match match_commentary - ", TARGET)
  if (TARGET && TARGET.length && TARGET.length === 1) {
//    TARGET[0].style.backgroundColor = "#4a4a4a";
    TARGET[0].style.color = "#f2f2f2";
  }
}

function mutate_mini_score_board() {
  const TARGET = document.querySelector("#matchCenter > div.cb-col.cb-col-67.cb-nws-lft-col.cb-comm-pg > div.ng-scope > div.cb-col.cb-col-100.cb-mini-col.cb-bg-white.cb-min-lv.ng-scope");
  if (!TARGET) return;
  TARGET.style.backgroundColor = "#4a4a4a";

  const batting_header = document.querySelector("#matchCenter > div.cb-col.cb-col-67.cb-nws-lft-col.cb-comm-pg > div.ng-scope > div.cb-col.cb-col-100.cb-mini-col.cb-bg-white.cb-min-lv.ng-scope > div.cb-col-67.cb-col > div:nth-child(1) > div.cb-col.cb-col-100.cb-min-hdr-rw.cb-bg-gray");
  if (!batting_header) return;
  batting_header.style.backgroundColor = "#333";
  batting_header.style.color = "#f2f2f2";

  const bowling_header = document.querySelector("#matchCenter > div.cb-col.cb-col-67.cb-nws-lft-col.cb-comm-pg > div.ng-scope > div.cb-col.cb-col-100.cb-mini-col.cb-bg-white.cb-min-lv.ng-scope > div.cb-col-67.cb-col > div:nth-child(2) > div.cb-col.cb-col-100.cb-min-hdr-rw.cb-bg-gray.ng-scope");
  if (!bowling_header) return;
  bowling_header.style.backgroundColor = "#333";
  bowling_header.style.color = "#f2f2f2";
}

function mutate_key_stats() {
  const NODE = document.querySelector("#matchCenter > div.cb-col.cb-col-67.cb-nws-lft-col.cb-comm-pg > div.ng-scope > div.cb-col.cb-col-100.cb-mini-col.cb-bg-white.cb-min-lv.ng-scope > div.cb-col.cb-col-33.cb-key-st-lst > div");
  if (!NODE) return;

  NODE.style.borderColor = "#333";
  NODE.style.color = "#f2f2f2";
  
  if (NODE.children.length) {
    NODE.children[0].style.backgroundColor = "#333";
    NODE.children[0].style.color = "#f2f2f2";
  }
}

function mutate_recent() {
  const NODE = document.querySelector("#matchCenter > div.cb-col.cb-col-67.cb-nws-lft-col.cb-comm-pg > div.ng-scope > div.cb-col.cb-col-100.cb-mini-col.cb-bg-white.cb-min-lv.ng-scope > div.cb-col.cb-col-100.cb-comm-rcnt-wrap > div > div");
  if (!NODE || !NODE?.children.length) return;

  for (const elem of NODE.children) {
    elem.style.color = "#f2f2f2";
  }
}

function mutate_over_summary() {
  const NODES = document.getElementsByClassName("cb-com-ovr-sum");
  if (!NODES || !NODES.length) return

  for (const node of NODES) {
    node.style.backgroundColor = "#333";
    node.style.color = "#f2f2f2";
  }
}

function mutate_live_score() {
  const NODE = document.querySelector("#matchCenter > div.cb-col.cb-col-67.cb-nws-lft-col.cb-comm-pg > div.ng-scope > div.cb-col.cb-col-100.cb-mini-col.cb-bg-white.cb-min-lv.ng-scope > div.cb-col-100.cb-col.cb-col-scores > div.cb-col.cb-col-67.cb-scrs-wrp > h2");
  if (!NODE) return;

  NODE.style.color = "#fff";
}

function mutate_run_rate() {
  const TARGET = document.querySelector("#matchCenter > div.cb-col.cb-col-67.cb-nws-lft-col.cb-comm-pg > div.ng-scope > div.cb-col.cb-col-100.cb-mini-col.cb-bg-white.cb-min-lv.ng-scope > div.cb-col-100.cb-col.cb-col-scores > div.cb-col.cb-col-67.cb-scrs-wrp > div.cb-min-bat-rw");
  if (!TARGET || !TARGET.children.length) return;

  for (const elem of TARGET.children) {
    if (elem.tagName !== "H2") {
      elem.style.color = "#f2f2f2";
    }
  }
}

function mutate_match_inprogress() {
  const NODES = document.getElementsByClassName("cb-text-inprogress");
  if (!NODES || !NODES.length) return;

  for (const node of NODES) {
    node.style.color = "#F78700";
  }
}

function mutate_toss_decision() {
  const NODE = document.querySelector("#matchCenter > div.cb-col.cb-col-67.cb-nws-lft-col.cb-comm-pg > div.ng-scope > div:nth-child(3) > div.cb-col.cb-col-100.cb-font-18.cb-toss-sts.cb-text-toss");
  if (!NODE) return;

  NODE.style.color = "#F78700";
}

function mutate_batter() {
  const NODE = document.querySelector("#matchCenter > div.cb-col.cb-col-67.cb-nws-lft-col.cb-comm-pg > div.ng-scope > div.cb-col.cb-col-100.cb-mini-col.cb-bg-white.cb-min-lv.ng-scope > div.cb-col-67.cb-col > div:nth-child(1)");
  if (!NODE || !NODE?.children.length) return;

  for (const elem of NODE.children) {
    const batter = elem.querySelector("div > div.cb-col.cb-col-50 > a");
    if (batter) batter.style.color = "#C6DEA6";
  }
}

function mutate_bowler() {
  const NODE = document.querySelector("#matchCenter > div.cb-col.cb-col-67.cb-nws-lft-col.cb-comm-pg > div.ng-scope > div.cb-col.cb-col-100.cb-mini-col.cb-bg-white.cb-min-lv.ng-scope > div.cb-col-67.cb-col > div:nth-child(2)");
  if (!NODE || !NODE?.children.length) return;

  for (const elem of NODE.children) {
    const batter = elem.querySelector("div > div.cb-col.cb-col-50 > a");
    if (batter) batter.style.color = "#C6DEA6";
  }
}

export function mutate_latest_news() {
  const TARGET = document.getElementById("latest-news-mod");
  if (!TARGET) return;

  for (const elem of TARGET.children) {
    elem.style.backgroundColor = "#4a4a4a";
    const title = elem.querySelector(".cb-nws-hdln-ancr");
    if (title) title.style.color = "#fff";
    const time = elem.querySelector(".cb-nws-time");
    if (time) time.style.color = "#f2f2f2";
  }
}

function mutate_latest_photos() {
  const TARGET = document.getElementById("latest-photos-mod")
  if (!TARGET) return;

  for (const elem of TARGET.children) {
    elem.style.backgroundColor = "#4a4a4a";
    const title = elem.querySelector(".cb-nws-hdln-ancr");
    if (title) title.style.color = "#fff";
    const time = elem.querySelector(".cb-nws-time");
    if (time) time.style.color = "#f2f2f2";
  }
}

function mutate_match_result() {
  const TARGET = document.querySelector("#matchCenter > div.cb-col.cb-col-67.cb-nws-lft-col.cb-comm-pg > div.ng-scope > div.cb-col.cb-col-100.cb-mini-col.cb-min-comp.ng-scope > div.cb-col.cb-col-100.cb-min-stts.cb-text-complete");
  if (!TARGET) return;

  TARGET.style.color = "#F78764";
}

function mutate_mom() {
  const NODE = document.querySelector("#matchCenter > div.cb-col.cb-col-67.cb-nws-lft-col.cb-comm-pg > div.ng-scope > div.cb-col.cb-col-100.cb-mini-col.cb-min-comp.ng-scope > div.cb-col.cb-col-50.cb-mom-itm.ng-scope");
  if (!NODE) return;
  for (const elem of NODE.children) {
    elem.style.color = "#f2f2f2";
  }
}

function mutate_bowling_score() {
  const TARGET = document.querySelector("#matchCenter > div.cb-col.cb-col-67.cb-nws-lft-col.cb-comm-pg > div.ng-scope > div.cb-col.cb-col-100.cb-mini-col.cb-min-comp.ng-scope > div.cb-col.cb-col-100.cb-col-scores > div.cb-col.cb-col-67.cb-scrs-wrp > h2.cb-col.cb-col-100.cb-min-tm.cb-text-gray.ng-binding");
  if (!TARGET) return;

  TARGET.style.color = "#f2f2f2";
}
