let icon = document.querySelector(".header .links .icon");
let links = document.querySelector(".header .links ul");
icon.onclick = function (e) {
  e.stopPropagation();
  links.classList.toggle("open");
  document
    .querySelector(".icon span:nth-child(2)")
    .classList.toggle("complete");
};
document.addEventListener("click", (e) => {
  if (e.target !== icon) {
    if (links.classList.contains("open")) {
      links.classList.remove("open");
      document
        .querySelector(".icon span:nth-child(2)")
        .classList.remove("complete");
    }
  }
});
let allLinks = document.querySelectorAll(".header .links ul li a");
allLinks.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(e.target.dataset.section).scrollIntoView();
  });
});
