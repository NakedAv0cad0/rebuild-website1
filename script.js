const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

// Toggle menu
document.addEventListener("click", (e) => {
  if (e.target.id === "menu-btn") {
    menu.classList.toggle("hidden");
    return;
  }
  menu.classList.add("hidden");
});

const hero = document.getElementById("hero");
const heroImg = hero.querySelector("img");

const load = () => {
  hero.classList.add("loaded");
};

if (heroImg.complete) load();
if (!heroImg.complete) heroImg.addEventListener("load", load);
