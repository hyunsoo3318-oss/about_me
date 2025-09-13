
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});


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


const hobbiesSection = document.querySelector("#hobbies");
if (hobbiesSection) {
  const btn = document.createElement("button");
  btn.textContent = "랜덤 취미 보기";
  btn.style.display = "block";
  btn.style.margin = "1rem auto";
  btn.style.padding = "0.5rem 1rem";
  btn.style.border = "none";
  btn.style.borderRadius = "6px";
  btn.style.background = "#2c3e50";
  btn.style.color = "#fff";
  btn.style.cursor = "pointer";

  hobbiesSection.appendChild(btn);

  const hobbyItems = document.querySelectorAll("#hobbies li");
  btn.addEventListener("click", () => {
    const random = hobbyItems[Math.floor(Math.random() * hobbyItems.length)].textContent;
    alert("오늘의 랜덤 취미 추천 🎲 : " + random);
  });
}

const footer = document.querySelector("footer p");
if (footer) {
  const today = new Date();
  const dateString = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  footer.textContent += ` | 오늘 날짜: ${dateString}`;
}

