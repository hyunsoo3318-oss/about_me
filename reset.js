const $ = (sel, p = document) => p.querySelector(sel);
const $$ = (sel, p = document) => Array.from(p.querySelectorAll(sel));

function scrollWithOffset(el, extra = 12) {
  if (!el) return;
  const header = $("header");
  const headerH = header ? header.offsetHeight : 0;
  const y = el.getBoundingClientRect().top + window.pageYOffset - headerH - extra;
  window.scrollTo({ top: y, behavior: "smooth" });
}

$$("nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (!href || !href.startsWith("#")) return;
    e.preventDefault();
    const target = document.querySelector(href);
    scrollWithOffset(target, 12);
    history.pushState(null, "", href);
  });
});

function adjustHashOnLoad() {
  if (location.hash) {
    const target = document.querySelector(location.hash);
    setTimeout(() => scrollWithOffset(target, 12), 0);
  }
}
window.addEventListener("load", adjustHashOnLoad);

const profileImg = $("#photo img");
if (profileImg) {
  profileImg.style.transition = "transform 0.3s ease";
  profileImg.style.cursor = "pointer";
  let zoomed = false;
  profileImg.addEventListener("click", () => {
    zoomed = !zoomed;
    profileImg.style.transform = zoomed ? "scale(1.5)" : "scale(1)";
  });
}

$$("#skills li").forEach(li => {
  li.addEventListener("mouseenter", () => {
    li.style.color = "#2980b9";
    li.style.fontWeight = "700";
  });
  li.addEventListener("mouseleave", () => {
    li.style.color = "";
    li.style.fontWeight = "";
  });
});


