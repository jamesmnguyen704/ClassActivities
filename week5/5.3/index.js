// Mobile menu toggle functionality
document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");
});

// Intersection Observer for scroll animations
const blocks = document.querySelectorAll(".content.responsive div");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.2 }
);

// Initialize animation styles and observe elements
blocks.forEach(block => {
  block.style.opacity = 0;
  block.style.transform = "translateY(40px)";
  block.style.transition = "all 0.8s ease";
  observer.observe(block);
});
