// Login Modal
const openLoginModal = document.getElementById("openLoginModal");
const loginModal = document.getElementById("loginModal");
const closeLoginModal = document.getElementById("closeLoginModal");

openLoginModal.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent anchor jump
  loginModal.classList.add("active");
});

closeLoginModal.addEventListener("click", function () {
  loginModal.classList.remove("active");
});

// Optional: Close modal on outside click
loginModal.addEventListener("click", function (e) {
  if (e.target === loginModal) {
    loginModal.classList.remove("active");
  }
});

// Optional: Close on Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && loginModal.classList.contains("active")) {
    loginModal.classList.remove("active");
  }
});

const registerModal = document.getElementById("registerModal");
const closeRegisterModal = document.getElementById("closeRegisterModal");

document
  .getElementById("switchToRegister")
  .addEventListener("click", function (e) {
    e.preventDefault();
    loginModal.classList.remove("active");
    registerModal.classList.add("active");
  });

document
  .getElementById("switchToLogin")
  .addEventListener("click", function (e) {
    e.preventDefault();
    registerModal.classList.remove("active");
    loginModal.classList.add("active");
  });

closeRegisterModal.addEventListener("click", function () {
  registerModal.classList.remove("active");
});

//  for counting
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }

    let displayValue;
    if (current >= 1000) {
      displayValue = Math.floor(current / 1000) + "K+";
    } else {
      displayValue = Math.floor(current).toString();
    }

    element.textContent = displayValue;
  }, 16);
}

const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const numberElement = entry.target.querySelector(".stats-number");
      const target = parseInt(numberElement.dataset.target);
      animateCounter(numberElement, target);
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.addEventListener("DOMContentLoaded", () => {
  const statsCards = document.querySelectorAll(".metric-item");
  statsCards.forEach((card) => {
    observer.observe(card);
  });
});

window.addEventListener("load", () => {
  setTimeout(() => {
    const numberElements = document.querySelectorAll(".stats-number");
    numberElements.forEach((element) => {
      if (element.textContent === "0") {
        const target = parseInt(element.dataset.target);
        animateCounter(element, target);
      }
    });
  }, 500);
});

//range
const range = document.getElementById("priceRange");
range.addEventListener("input", function () {
  console.log("Selected value:", this.value);
});
