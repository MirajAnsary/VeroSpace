document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form elements
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const successMessage = document.getElementById("successMessage");
  const errorMessage = document.getElementById("errorMessage");

  // Hide previous messages
  successMessage.style.display = "none";
  errorMessage.style.display = "none";

  // Basic validation
  if (!firstName || !lastName || !phone || !email || !message) {
    errorMessage.style.display = "block";
    errorMessage.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorMessage.textContent = "Please enter a valid email address.";
    errorMessage.style.display = "block";
    errorMessage.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  // Phone validation (basic)
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  if (!phoneRegex.test(phone.replace(/[\s\-$$$$]/g, ""))) {
    errorMessage.textContent = "Please enter a valid phone number.";
    errorMessage.style.display = "block";
    errorMessage.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  // Simulate form submission
  const submitBtn = document.querySelector(".submit-btn");
  const originalText = submitBtn.textContent;
  submitBtn.textContent = "Sending...";
  submitBtn.disabled = true;

  setTimeout(() => {
    // Show success message
    successMessage.style.display = "block";
    successMessage.scrollIntoView({ behavior: "smooth", block: "center" });

    // Reset form
    document.getElementById("contactForm").reset();

    // Reset button
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;

    // Hide success message after 5 seconds
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 5000);
  }, 1500);
});

// Add input event listeners for real-time validation feedback
const inputs = document.querySelectorAll("input, textarea");
inputs.forEach((input) => {
  input.addEventListener("input", function () {
    if (this.value.trim()) {
      this.style.borderColor = "#10b981";
    } else {
      this.style.borderColor = "#e5e7eb";
    }
  });
});
