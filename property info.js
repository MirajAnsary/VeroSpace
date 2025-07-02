document.addEventListener("DOMContentLoaded", function () {
  const mobileFilterBtn = document.getElementById("mobileFilterBtn");
  const mobileCloseBtn = document.getElementById("mobileCloseBtn");
  const propertySidebar = document.querySelector(".property-sidebar");
  const mobileOverlay = document.getElementById("mobileOverlay");

  // Open sidebar
  mobileFilterBtn.addEventListener("click", function () {
    propertySidebar.classList.add("mobile-open");
    mobileOverlay.classList.add("show");
  });

  // Close sidebar from overlay
  mobileOverlay.addEventListener("click", function () {
    propertySidebar.classList.remove("mobile-open");
    mobileOverlay.classList.remove("show");
  });

  // ❗ Close sidebar from close (X) button
  mobileCloseBtn.addEventListener("click", function () {
    propertySidebar.classList.remove("mobile-open");
    mobileOverlay.classList.remove("show");
  });
});
