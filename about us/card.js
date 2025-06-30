var swiper = new Swiper(".profileSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: {
    enabled: true,
    forceToAxis: true,
  },
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    480: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
  },
});

// Add click handlers for contact icons
document.querySelectorAll(".contact-icon").forEach((icon) => {
  icon.addEventListener("click", function () {
    // Add your contact functionality here
    alert("Contact functionality would be implemented here");
  });
});
