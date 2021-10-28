let hamBtn = document.querySelector(".mobile-menu");
let nav = document.querySelector(".mobile-nav");
hamBtn.addEventListener("click", () => {
  if (nav.style.display == "none") {
    nav.style.display = "block";
    hamBtn.style.opacity = 0.5;
  } else {
    nav.style.display = "none";
    console.log(nav);
    hamBtn.style.opacity = 1;
  }
});
