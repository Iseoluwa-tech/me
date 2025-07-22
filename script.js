// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
// Back to top button logic
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}
const toggleBtn = document.getElementById("themeToggle");

// List of elements to apply dark mode
const elementsToToggle = [
  document.body,
  document.querySelector("header"),
  document.querySelector("footer"),
  document.querySelector(".navbar"),
  document.querySelector(".hero"),
  ...document.querySelectorAll(".nav-links"),
  ...document.querySelectorAll(".project-card")
];

// Apply dark mode
function setDarkMode(enabled) {
  elementsToToggle.forEach(el => {
    if (el) el.classList.toggle("dark-mode", enabled);
  });
  toggleBtn.textContent = enabled ? "☀️" : "🌙";
  localStorage.setItem("darkMode", enabled ? "enabled" : "disabled");
}

// Load user preference
const isDark = localStorage.getItem("darkMode") === "enabled";
setDarkMode(isDark);

// Toggle theme on click
toggleBtn.addEventListener("click", () => {
  const dark = document.body.classList.contains("dark-mode");
  setDarkMode(!dark);
});
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}
  const profileThumb = document.getElementById("profileThumb");
  const imagePopup = document.getElementById("imagePopup");
  const closePopup = document.getElementById("closePopup");

  profileThumb.addEventListener("click", () => {
    imagePopup.style.display = "flex";
  });

  closePopup.addEventListener("click", () => {
    imagePopup.style.display = "none";
  });

  // Optional: close popup when clicking outside the image
  imagePopup.addEventListener("click", (e) => {
    if (e.target === imagePopup) {
      imagePopup.style.display = "none";
    }
  });



