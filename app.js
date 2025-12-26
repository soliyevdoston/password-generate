const range = document.querySelector(".range");
const lengthCount = document.querySelector(".length-count");
const checkboxes = document.querySelectorAll(".checkbox");
const images = document.querySelectorAll(".strength-img");
const copyContainer = document.querySelector(".copy-container");

range.addEventListener("input", () => {
  lengthCount.textContent = range.value;
  calculateStrength();
});

function calculateStrength() {
  let score = 0;
  checkboxes.forEach((img) => {
    if (img.checked) score += 1;
  });
  score += Number(range.value) / 5;
  images.forEach((img) => img.classList.remove("active"));
  if (score <= 2) images[0].classList.add("active");
  else if (score <= 4) images[1].classList.add("active");
  else if (score <= 6) images[2].classList.add("active");
  else images[3].classList.add("active");
}
checkboxes.forEach((img) => img.addEventListener("change", calculateStrength));
calculateStrength();
copyContainer.addEventListener("click", () => {
  copyContainer.classList.add("copied");
  setTimeout(() => {
    copyContainer.classList.remove("copied");
  }, 2500);
});
