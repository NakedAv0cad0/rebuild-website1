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

// Load images
const imgHolders = document.querySelectorAll(".blur-bg");
imgHolders.forEach((holder) => {
  const img = holder.querySelector("img");
  const load = () => {
    holder.classList.add("loaded");
  };
  console.log(holder);
  if (img.complete) load();
  if (!img.complete) img.addEventListener("load", load);
});

// Set year
const year = document.getElementById("year");
year.innerText = new Date().getFullYear();
