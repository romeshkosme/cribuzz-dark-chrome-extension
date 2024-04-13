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
  if (TARGET && TARGET.length && TARGET.length === 1) {
    TARGET[0].style.color = "#f2f2f2";
  }
}
