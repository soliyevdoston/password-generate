// ================= ELEMENTLAR =================
const range = document.querySelector(".range");
const lengthCount = document.querySelector(".length-count");
const checkboxes = document.querySelectorAll(".checkbox");
const images = document.querySelectorAll(".strength-img");
const scoreText = document.querySelector(".score");
const btn = document.querySelector(".btn");
const copyContainer = document.querySelector(".copy-container");
const enterBtn = document.getElementById("enterBtn");
const intro = document.querySelector(".intro");
const main = document.querySelector(".parent");

enterBtn.addEventListener("click", () => {
  intro.classList.add("hide");
  main.classList.add("show");
});

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-={}[]<>?/";

range.addEventListener("input", () => {
  lengthCount.textContent = range.value;
  ChangeImg();
});

btn.addEventListener("click", () => {
  const parolsoni = Number(range.value);
  let ummumiy = "";

  if (checkboxes[0].checked) ummumiy += upper;
  if (checkboxes[1].checked) ummumiy += lower;
  if (checkboxes[2].checked) ummumiy += numbers;
  if (checkboxes[3].checked) ummumiy += symbols;
  if (!ummumiy || parolsoni === 0) {
    scoreText.textContent = "Select options !!!";
    scoreText.style.color = "#ff6b6b";
    return;
  }
  scoreText.style.color = "#e6e5ea";

  let result = "";
  for (let i = 0; i < parolsoni; i++) {
    const randomIndex = Math.floor(Math.random() * ummumiy.length);
    result += ummumiy[randomIndex];
  }

  scoreText.textContent = result;
  ChangeImg();
});

function ChangeImg() {
  let score = 0;
  checkboxes.forEach((checkboxb) => {
    if (checkboxb.checked) score++;
  });
  score += Number(range.value) / 5;
  images.forEach((img) => img.classList.remove("active"));
  if (score <= 2) images[0].classList.add("active");
  else if (score <= 4) images[1].classList.add("active");
  else if (score <= 6) images[2].classList.add("active");
  else images[3].classList.add("active");
}
checkboxes.forEach((checkboxb) =>
  checkboxb.addEventListener("change", ChangeImg)
);

copyContainer.addEventListener("click", () => {
  const error = scoreText.textContent;
  if (!error || error === "Select options") return;

  navigator.clipboard.writeText(error);
  copyContainer.classList.add("copied");

  setTimeout(() => {
    copyContainer.classList.remove("copied");
  }, 2500);
});

lengthCount.textContent = range.value;
ChangeImg();
