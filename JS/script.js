document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.getElementById("nav").classList.add("fixed-top");
      // add padding top to show content behind navbar
      navbar_height = document.querySelector(".navbr").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      document.getElementById("nav").classList.remove("fixed-top");
      // remove padding top from body
      document.body.style.paddingTop = "0";
    }
  });
});

const up = document.querySelector(".up");

window.addEventListener("scroll", () => {
  if (window.scrollY <= 300) {
    up.style.visibility = "hidden";
    document.getElementById("nav").style.backgroundColor = "#00000080";
  } else {
    up.style.visibility = "visible";
    document.getElementById("nav").style.backgroundColor = "black";
  }
});

console.log(up);
