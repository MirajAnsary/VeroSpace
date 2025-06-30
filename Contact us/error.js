class EmailValidator {
  constructor() {
    this.form = document.getElementById("emailForm");
    this.emailInput = document.getElementById("emailInput");
    this.errorMessage = document.getElementById("errorMessage1");
    this.successMessage = document.getElementById("successMessage1");
    this.formContainer = document.getElementById("formContainer1");

    this.init();
  }

  init() {
    // Form submission
    this.form.addEventListener("subscribe", (e) => {
      e.preventDefault();
      this.validateAndSubmit();
    });

    // Real-time validation on input
    this.emailInput.addEventListener("input", () => {
      if (this.emailInput.classList.contains("error")) {
        this.clearError();
      }
    });

    // Validation on blur
    this.emailInput.addEventListener("blur", () => {
      if (this.emailInput.value.trim()) {
        this.validateEmail(this.emailInput.value, false);
      }
    });
  }

  validateEmail(email, showSuccess = true) {
    // Clear previous messages
    this.clearMessages();

    // Check if email is empty
    if (!email.trim()) {
      this.showError("Email address is required");
      return false;
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      this.showError("Please enter a valid email address");
      return false;
    }

    // Check for common email format issues
    if (email.includes("..") || email.startsWith(".") || email.endsWith(".")) {
      this.showError("Email format is invalid");
      return false;
    }

    // Check minimum length
    if (email.length < 5) {
      this.showError("Email address is too short");
      return false;
    }

    // Check maximum length
    if (email.length > 254) {
      this.showError("Email address is too long");
      return false;
    }

    // Check for valid domain
    const domain = email.split("@")[1];
    if (domain && domain.length < 2) {
      this.showError("Invalid email domain");
      return false;
    }

    // If all validations pass
    if (showSuccess) {
      this.showSuccess("Valid email address!");
    }
    return true;
  }

  validateAndSubmit() {
    const email = this.emailInput.value.trim();

    if (this.validateEmail(email)) {
      // Simulate form submission
      this.showSuccess("Email submitted successfully!");

      // Reset form after 2 seconds
      setTimeout(() => {
        this.form.reset();
        this.clearMessages();
      }, 2000);
    } else {
      // Shake animation on error
      this.formContainer.classList.add("shake");
      setTimeout(() => {
        this.formContainer.classList.remove("shake");
      }, 500);
    }
  }

  showError(message) {
    this.emailInput.classList.add("error");
    this.errorMessage.textContent = message;
    this.errorMessage.classList.add("show");
  }

  showSuccess(message) {
    this.emailInput.classList.remove("error");
    this.successMessage.textContent = message;
    this.successMessage.classList.add("show");
  }

  clearError() {
    this.emailInput.classList.remove("error");
    this.errorMessage.classList.remove("show");
  }

  clearSuccess() {
    this.successMessage.classList.remove("show");
  }

  clearMessages() {
    this.clearError();
    this.clearSuccess();
  }
}

// Initialize the email validator when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new EmailValidator();
});

// Prevent zoom on iOS when focusing input
document.addEventListener("touchstart", function () {}, true);
