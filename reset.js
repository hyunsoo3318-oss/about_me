
// -----------------------------
// 1. 네비게이션 메뉴 부드러운 스크롤
// -----------------------------
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href"); // #about, #skills, #hobbies
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// -----------------------------
// 2. 프로필 사진 클릭 → 확대/축소 토글
// -----------------------------
const profileImg = document.querySelector("#photo img");
if (profileImg) {
  profileImg.style.transition = "transform 0.3s ease";
  let zoomed = false;

  profileImg.addEventListener("click", () => {
    zoomed = !zoomed;
    profileImg.style.transform = zoomed ? "scale(1.5)" : "scale(1)";
    profileImg.style.cursor = "pointer";
  });
}

// -----------------------------
// 3. 기술스택 항목 hover → 강조 효과
// -----------------------------
document.querySelectorAll("#skills li").forEach(item => {
  item.addEventListener("mouseenter", () => {
    item.style.color = "#2980b9";
    item.style.fontWeight = "bold";
  });
  item.addEventListener("mouseleave", () => {
    item.style.color = "";
    item.style.fontWeight = "";
  });
});


