document.getElementById("btn").addEventListener("click", function() {
  alert("嗨！很高興認識你 😃");
});
// 星空背景
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
for (let i = 0; i < 150; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5,
    alpha: Math.random(),
    speed: Math.random() * 0.02
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  stars.forEach(star => {
    ctx.globalAlpha = star.alpha;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
    star.alpha += star.speed;
    if (star.alpha <= 0 || star.alpha >= 1) star.speed = -star.speed;
  });
  requestAnimationFrame(drawStars);
}
drawStars();

window.onresize = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};// 捲動出現動畫
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 100; // 提前 100px 出現
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", revealOnScroll);

// 初始執行一次，避免第一屏元素沒顯示
revealOnScroll();
// 回到頂部按鈕
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
// 按鈕事件
document.getElementById("btn").addEventListener("click", function() {
  alert("嗨！很高興認識你 😃");
});

// 打字機效果
function typeWriter(element, text, speed) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

// 在 header 的 p 加上打字動畫
window.onload = function() {
  const subtitle = document.querySelector("header p");
  const text = "一個正在學網頁開發的新手";
  subtitle.innerHTML = ""; // 先清空
  typeWriter(subtitle, text, 300);
};

