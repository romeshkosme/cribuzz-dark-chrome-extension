const MATCH_CARD_BG = "#4a4a4a";
const SUBSCRIPTION_LIST = []; // all observer list

async function main() {
  let res = await chrome.storage.sync.get(["dark_mode"]).then((response) => {
    return response.dark_mode || false;
  });
  if (!res) return;
  mutate_home_bg();
  mutate_home_match_list();
  subscribe();
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

chrome.storage.onChanged.addListener(function(changes, namespace) {
  console.log(changes)
  if (!changes.dark_mode.new_value) {
    unsubscribe();
  } else {
    main();
  }
});
