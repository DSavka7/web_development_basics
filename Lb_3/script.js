// Анімація появи при завантаженні
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("header").classList.add("show");
});

// Анімація при прокрутці
const cards = document.querySelectorAll(".slide-in");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

cards.forEach(card => observer.observe(card));
