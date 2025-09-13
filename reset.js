
// ===== util =====
const $ = (sel, p = document) => p.querySelector(sel);
const $$ = (sel, p = document) => Array.from(p.querySelectorAll(sel));

/**
 * 헤더 높이 + 미세여백만큼 보정해서 스크롤
 * @param {Element} el - 스크롤할 대상 섹션
 * @param {number} extra - 추가 보정 px (섹션 margin-top 등)
 */
function scrollWithOffset(el, extra = 12) {
  if (!el) return;
  const header = $("header");
  const headerH = header ? header.offsetHeight : 0;
  const y = el.getBoundingClientRect().top + window.pageYOffset - headerH - extra;
  window.scrollTo({ top: y, behavior: "smooth" });
}

// 1) 네비게이션 부드러운 스크롤 + 오프셋 보정
$$("nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (!href || !href.startsWith("#")) return;
    e.preventDefault();
    const target = document.querySelector(href);
    scrollWithOffset(target, 12); // 필요시 8~20 사이로 미세 조정
    history.pushState(null, "", href); // 주소창 해시 동기화
  });
});

// 2) 해시로 직접 진입했을 때(새로고침/외부링크) 위치 보정
function adjustHashOnLoad() {
  if (location.hash) {
    const target = document.querySelector(location.hash);
    // 레이아웃 계산이 끝난 뒤 보정 (이미 기본 점프가 일어났을 수 있음)
    setTimeout(() => scrollWithOffset(target, 12), 0);
  }
}
window.addEventListener("load", adjustHashOnLoad);

// 3) 프로필 사진 클릭 → 확대/축소 토글
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

// 4) 기술스택 hover → 강조(간단 스타일)
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



