const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const themeBtn = document.getElementById("themeBtn");
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("main section[id]");

// Mobile menu
menuBtn.addEventListener("click", () => navMenu.classList.toggle("open"));
navLinks.forEach(link =>
  link.addEventListener("click", () => navMenu.classList.remove("open"))
);

// Theme switch (remembers choice)
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  themeBtn.textContent = theme === "dark" ? "Light" : "Dark";
}
let saved = "light";
try { saved = localStorage.getItem("theme") || "light"; } catch (e) {}
applyTheme(saved);
themeBtn.addEventListener("click", () => {
  const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
  try { localStorage.setItem("theme", next); } catch (e) {}
});

// Highlight active nav link while scrolling
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === "#" + current);
  });
});

// Contact form validation (client side only)
const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");
form.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!name || !emailOk || !message) {
    statusEl.textContent = "Please enter a name, a valid email and a message.";
    statusEl.className = "error";
    return;
  }
  statusEl.textContent = "Thank you, " + name + "! Your message has been recorded.";
  statusEl.className = "ok";
  form.reset();
});

console.log("Nandhitha P Portfolio | B.Tech IT | 2028");
