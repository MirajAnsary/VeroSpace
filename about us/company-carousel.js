document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".carousel-track");
  const container = document.querySelector(".carousel-container");

  // Pause animation on hover
  container.addEventListener("mouseenter", function () {
    track.style.animationPlayState = "paused";
  });

  container.addEventListener("mouseleave", function () {
    track.style.animationPlayState = "running";
  });

  // Pause animation on focus for accessibility
  const logoItems = document.querySelectorAll(".logo-item");
  logoItems.forEach((item) => {
    item.addEventListener("focusin", function () {
      track.style.animationPlayState = "paused";
    });

    item.addEventListener("focusout", function () {
      track.style.animationPlayState = "running";
    });
  });

  // Respect user's motion preferences
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    track.style.animation = "none";
    track.style.width = "100%";
    track.style.justifyContent = "space-around";
    document.querySelector(".logo-group:last-child").style.display = "none";
  }
});
