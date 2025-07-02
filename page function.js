// Add click functionality
document.querySelectorAll(".page-number").forEach((button) => {
  button.addEventListener("click", function () {
    // Remove active class from all buttons
    document.querySelectorAll(".page-number").forEach((btn) => {
      btn.classList.remove("active");
    });

    // Add active class to clicked button
    this.classList.add("active");
  });
});
