import live_score_page from "./match-content.js";

const MATCH_CARD_BG = "#4a4a4a";
export const SUBSCRIPTION_LIST = []; // all observer list

async function main() {
  const LOCATION = window.location;
  let res = await chrome.storage.sync.get(["dark_mode"]).then((response) => {
    return response.dark_mode || false;
  });
  if (!res) return;
  mutate_home_bg();
  if (LOCATION?.pathname === "/") {
    mutate_home_match_list();
    subscribe();
    mutate_quick_navbar();
    mutate_quick_access();
    mutate_ad_block();
    mutate_home_news_block();
    mutate_home_photos_block();
    mutate_home_schedule_block();
    mutate_home_mid_col();
    mutate_home_featured_videos();
    mutate_home_special_block();
  } else if (LOCATION?.pathname.includes("live-cricket-scores")) {
    // live match score
    console.log("live")
    live_score_page();
  } else if (LOCATION.pathname.includes("live-cricket-scorecard")) {
    // score card
  }
}
// subscribe Mutation
function subscribe() {
  subscribe_home_match_list();
}
// unsubscribe observer
function unsubscribe() {
  SUBSCRIPTION_LIST.map((observer) => {
    observer.disconnect();
  })
  SUBSCRIPTION_LIST.length = 0;
  window.location.reload();
}
// mutate body bg
function mutate_home_bg() {
  const BG_GRAY = "#202124";
  const BODY = document.getElementsByTagName("body");
  BODY[0].style.backgroundColor = BG_GRAY;
}
// mutate home -> match list card
function mutate_home_match_list() {
  const HOME_MATCHES_ELEM = document.getElementsByClassName("cb-match-card");
  const FOOTER_BG = "#333"
  const ONT_TEXT = ".cb-hmscg-bat-txt";
  
  for (const item of HOME_MATCHES_ELEM) {
    item.style.backgroundColor = MATCH_CARD_BG;
    item.children[1].style.backgroundColor = FOOTER_BG;
    const footer_link = item.children[1].querySelectorAll(".cb-match-footer-link");
    const team_one = item.children[0].querySelectorAll(".cb-hmscg-bat-txt");
    const team_two = item.children[0].querySelectorAll(".cb-hmscg-bwl-txt");
    const match_result = item.children[0].querySelectorAll(".cb-text-complete");
    const match_preview = item.children[0].querySelectorAll(".cb-text-preview");
    const match_title = item.children[0].querySelectorAll(".cb-mtch-crd-hdr > .cb-color-light-sec");
    if (team_one && team_one.length) {
      for (const elem of team_one) {
        elem.style.color = "#ffffff";
      }
    }
    if (team_two && team_two.length) {
      for (const elem of team_two) {
        elem.style.color = "lightgray";
      }
    }
    if (match_result && match_result.length) {
      for (const elem of match_result) {
        elem.style.color = "#F78764";
      }
    }
    if (match_preview  && match_preview.length) {
      for (const elem of match_preview) {
        elem.style.color = "#7EBDC3"
      }
    }
    if (match_title && match_title) {
      for (const elem of match_title) {
        elem.style.color = "#C6DEA6";
      }
    }
    for (const link of footer_link) {
      link.style.color = "#f2f2f2"
    }
  }

}

main();

function subscribe_home_match_list() {
  const TARGET = document.getElementById("match_menu_container");
  if (TARGET) {
    const callback = (mutation, observer) => {
      mutate_home_match_list();
    }

    const observer = new MutationObserver(callback);

    observer.observe(TARGET, { attributes: true, childList: true, subtree: true})

    SUBSCRIPTION_LIST.push(observer);
  }
}

function mutate_quick_navbar() {
  const TARGET = document.getElementById("cb-qck-navbar");

  if (!TARGET) return;
  
  TARGET.style.backgroundColor = "#4a4a4a";
  for (const elem of TARGET.children) {
    elem.style.color = "#f2f2f2"
  }
  TARGET.children[0].style.color = "#fff";
}

function mutate_quick_access() {
  const TARGET = document.querySelector("#page-wrapper > div.cb-bg-white.cb-col.cb-col-100.disp-flex.align-center.cb-qck-lnk.ng-scope");
  
  if (!TARGET) return;

  TARGET.style.backgroundColor = "#4a4a4a";

  const HEADING = TARGET.querySelector("h1");
  HEADING.style.color = "#fff";

  const NAV = TARGET.querySelector("nav");

  if (!NAV) return;

  const LINK_LIST = NAV.children[0];

  for (const elem of LINK_LIST.children) {
    elem.style.backgroundColor = "#333";
    elem.style.color = "#f2f2f2";
  }
}

function mutate_ad_block() {
  const TARGET = document.getElementsByClassName("cb-ad-unit");

  if (TARGET && TARGET.length) {
    for (const elem of TARGET) {
      elem.style.backgroundColor = "#4a4a4a";
    }
  }
}
function mutate_home_news_block() {
  const TARGET = document.getElementById("cb-news-blck");

  if (TARGET) {
    TARGET.style.backgroundColor = "#4a4a4a";
  
    const NEWS_LIST = TARGET.querySelectorAll(".cb-lst-itm");

    if (NEWS_LIST && NEWS_LIST.length) {
      for (const elem of NEWS_LIST) {
        elem.style.backgroundColor = "#4a4a4a";
        elem.children[0].style.color = "#fff"; // news text color 
        elem.children[1].style.color = "#f0f0f0";
      }
    }
  }
}

function mutate_home_photos_block() {
  const TARGET = document.getElementById("hm-photos-blk");

  if (!TARGET) return;

  TARGET.style.backgroundColor = "#4a4a4a";

  const PHOTOS_LIST = TARGET.querySelectorAll(".cb-lst-itm");

  if (!PHOTOS_LIST) return;

  for (const elem of PHOTOS_LIST) {
    elem.style.backgroundColor = "#4a4a4a";
    elem.children[0].children[1].style.color = "#fff"; // news text color 
    elem.children[0].children[2].style.color = "#f0f0f0";
  }
}

function mutate_home_schedule_block() {
  const NODE = document.getElementById("cb-news-blck");
  if (!NODE) return;
  const TARGET = NODE.parentElement.children[2];
  
  TARGET.style.backgroundColor = "#4a4a4a";

  const SCHEDULE_LIST = TARGET.querySelectorAll(".cb-lst-itm");

  if (!SCHEDULE_LIST || !SCHEDULE_LIST.length) return;

  for (const elem of SCHEDULE_LIST) {
    elem.style.backgroundColor = "#4a4a4a";
    elem.children[0].style.color = "#fff";
    elem.children[1].style.color = "#f0f0f0";
  }
}

function mutate_home_mid_col() {
  const NODE = document.getElementsByClassName("cb-hm-mid");

  if (!NODE || !NODE.length || NODE.length > 1) {
    return;
  }
  
  NODE[0].style.backgroundColor = "#4a4a4a";
  NODE[0].style.borderColor = "#202124";
  const TARGET = NODE[0];

  for (const elem of TARGET.children) {
    elem.style.backgroundColor = "#4a4a4a";
    if (elem.children.length) {
      elem.children[0].style.color = "#f2f2f2";
      elem.children[2].children[0].style.color = "#fff";
      elem.children[3].style.color = "#f2f2f2";

      const LINK = elem.querySelectorAll("a.big-crd-rltd-txt");
      if (LINK && LINK.length) {
        for (const link of LINK) {
          link.style.color = "#7EBDC3";
          const pre_tag = link.querySelector(".cb-pretag");
          if (pre_tag) {
            pre_tag.style.color = "#e63946"
          }
        }
      }
      const SML_CRD_HDL = elem.querySelectorAll(".sml-crd-hdln");
      if (SML_CRD_HDL && SML_CRD_HDL.length) {
        SML_CRD_HDL[0].children[0].style.color = "#fff";
        SML_CRD_HDL[0].parentElement.children[1].style.color = "#f2f2f2";
      }
    }
  }
}

function mutate_home_featured_videos() {
  const NODE = document.getElementById("latest-vid-mod");

  NODE.style.backgroundColor = "#4a4a4a";
}

function mutate_home_special_block() {
  const NODE = document.getElementById("latest-vid-mod");

  const TARGET = NODE.parentElement.children[4];

  TARGET.style.backgroundColor = "#4a4a4a";

  const TARGET_CHILD = TARGET.querySelectorAll(".cb-col");

  if (TARGET_CHILD && TARGET_CHILD.length) {
    for (const elem of TARGET_CHILD) {
      elem.children[0].style.color = "#fff";
      elem.children[1].style.color = "#f2f2f2";
    }
  }
}

chrome.storage.onChanged.addListener(function(changes, namespace) {
  if (!changes.dark_mode.new_value) {
    unsubscribe();
  } else {
    main();
  }
});
