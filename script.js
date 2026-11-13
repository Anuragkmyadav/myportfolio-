// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu toggle
const btn = document.querySelector(".menu-btn");
const links = document.querySelector(".links");

btn.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  btn.setAttribute("aria-expanded", open);
});

// Close the menu after tapping a link
links.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    links.classList.remove("open");
    btn.setAttribute("aria-expanded", false);
  })
);
