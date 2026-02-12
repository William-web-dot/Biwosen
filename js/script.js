function toggleMenu() {
  const nav = document.getElementById("nav");
  // Toggle the "active" class we defined in CSS
  nav.classList.toggle("active");
}

// Close menu when clicking a link
document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav").classList.remove("active");
  });
});

// Close menu if user clicks outside of it
document.addEventListener("click", (e) => {
  const nav = document.getElementById("nav");
  const menuToggle = document.querySelector(".menu-toggle");
  
  if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
    nav.classList.remove("active");
  }
});

// Header scroll effect
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.style.boxShadow = window.scrollY > 50 ? "0 4px 10px rgba(0,0,0,0.2)" : "none";
});