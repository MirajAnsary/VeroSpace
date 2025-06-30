function toggleFAQ(element) {
  const faqItem = element.parentElement;
  const answer = faqItem.querySelector(".faq-answer");
  const icon = element.querySelector(".faq-icon");

  // Close all other FAQ items
  const allFaqItems = document.querySelectorAll(".faq-item");
  allFaqItems.forEach((item) => {
    if (item !== faqItem) {
      const otherAnswer = item.querySelector(".faq-answer");
      const otherIcon = item.querySelector(".faq-icon");
      otherAnswer.classList.remove("active");
      otherIcon.classList.remove("rotated");
    }
  });

  // Toggle current FAQ item
  answer.classList.toggle("active");
  icon.classList.toggle("rotated");
}

// Initialize the page with the second FAQ item open (as shown in the image)
document.addEventListener("DOMContentLoaded", function () {
  const secondFaqQuestion = document.querySelectorAll(".faq-question")[1];
  const secondIcon = secondFaqQuestion.querySelector(".faq-icon");
  secondIcon.classList.add("rotated");
});
