// Animate stat numbers (e.g. 15000 -> "15K+") when they scroll into view
const counters = document.querySelectorAll(".stats-number[data-target]");

function formatNumber(value) {
  return value >= 1000 ? Math.floor(value / 1000) + "K+" : value + "+";
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 2000;
  const start = performance.now();

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    el.textContent = formatNumber(Math.floor(progress * target));
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

counters.forEach((counter) => counterObserver.observe(counter));
