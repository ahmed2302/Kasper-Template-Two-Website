let statiecs = document.querySelector(".statiecs");
let statiecsArray = Array.from(document.querySelectorAll(".statiecs h2"));
let startSatats = true;
let startprice = true;
let skills = document.querySelector(".skills");
let skillsArray = Array.from(
  document.querySelectorAll(".skills .graph span span")
);
let price = document.querySelector(".pricing");
let priceArray = Array.from(document.querySelectorAll(".pricing .top span"));
window.onscroll = () => {
  let offsetTopSatas = statiecs.offsetTop;
  let offsetTopSkills = skills.offsetTop;
  let offsetTopPrice = price.offsetTop;
  let windowHeight = this.scrollY;
  if (windowHeight >= offsetTopSatas) {
    if (startSatats) {
      statiecsArray.forEach((stats) => {
        startCount(stats);
        startSatats = false;
      });
    }
  }
  if (windowHeight >= offsetTopSkills) {
    skillsArray.forEach((skill) => {
      skill.style.width = skill.dataset.width;
    });
  }
  if (windowHeight >= offsetTopPrice) {
    if (startprice) {
      priceArray.forEach((price) => {
        startCount(price);
        startprice = false;
      });
    }
  }
};

function startCount(ele) {
  let goal = ele.dataset.goal;
  let interval = setInterval(() => {
    ele.textContent++;
    if (ele.textContent == goal) {
      clearInterval(interval);
    }
  }, 2000 / goal);
}

document.querySelector(".toggle-menu").onclick = () => {
  document.querySelector("header nav ul").classList.toggle("open");
};

document.querySelector("header nav .form i").onclick = () => {
  document.querySelector("header  nav .form input").classList.toggle("show");
};
