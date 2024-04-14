export default function live_score_page() {
  match_bg();
  match_nav_head();
  match_nav_links();
  match_commentary();
  mutate_mini_score_board();
  mutate_key_stats();
  mutate_recent();
}

function match_bg() {
  const TARGET = document.getElementById("matchCenter");
  TARGET.style.backgroundColor = "#4a4a4a";
}

function match_nav_head() {
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

function match_nav_links() {
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
  console.log("sdfkjsdlf- ", NODE);
  if (!NODE || !NODE?.children.length) return;

  

  for (const elem of NODE.children) {
    console.log(elem)
    elem.style.color = "#f2f2f2";
  }
}
