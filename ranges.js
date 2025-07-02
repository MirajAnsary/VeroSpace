// Dual Range Slider Functionality
class DualRangeSlider {
  constructor() {
    this.minValue = 5000;
    this.maxValue = 15000;
    this.min = 1000;
    this.max = 25000;
    this.isDragging = false;
    this.activeThumb = null;

    this.slider = document.querySelector(".range-slider");
    this.track = document.querySelector(".range-track");
    this.leftThumb = document.querySelector(".range-thumb.left");
    this.rightThumb = document.querySelector(".range-thumb.right");
    this.minPriceEl = document.getElementById("minPrice");
    this.maxPriceEl = document.getElementById("maxPrice");

    this.init();
  }

  init() {
    this.leftThumb.addEventListener("mousedown", (e) =>
      this.startDrag(e, "left")
    );
    this.rightThumb.addEventListener("mousedown", (e) =>
      this.startDrag(e, "right")
    );

    // Touch events for mobile
    this.leftThumb.addEventListener(
      "touchstart",
      (e) => this.startDrag(e, "left"),
      { passive: false }
    );
    this.rightThumb.addEventListener(
      "touchstart",
      (e) => this.startDrag(e, "right"),
      { passive: false }
    );

    document.addEventListener("mousemove", (e) => this.drag(e));
    document.addEventListener("mouseup", () => this.stopDrag());

    // Touch events
    document.addEventListener("touchmove", (e) => this.drag(e), {
      passive: false,
    });
    document.addEventListener("touchend", () => this.stopDrag());

    this.updateUI();
  }

  startDrag(e, thumb) {
    e.preventDefault();
    this.isDragging = true;
    this.activeThumb = thumb;

    if (thumb === "left") {
      this.leftThumb.classList.add("dragging");
    } else {
      this.rightThumb.classList.add("dragging");
    }
  }

  drag(e) {
    if (!this.isDragging) return;

    e.preventDefault();

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const rect = this.slider.getBoundingClientRect();
    const percent = Math.max(
      0,
      Math.min(100, ((clientX - rect.left) / rect.width) * 100)
    );
    const value = this.min + (percent / 100) * (this.max - this.min);

    if (this.activeThumb === "left") {
      this.minValue = Math.min(value, this.maxValue - 1000);
    } else {
      this.maxValue = Math.max(value, this.minValue + 1000);
    }

    this.updateUI();
  }

  stopDrag() {
    this.isDragging = false;
    this.activeThumb = null;
    this.leftThumb.classList.remove("dragging");
    this.rightThumb.classList.remove("dragging");
  }

  updateUI() {
    const leftPercent =
      ((this.minValue - this.min) / (this.max - this.min)) * 100;
    const rightPercent =
      ((this.maxValue - this.min) / (this.max - this.min)) * 100;

    this.leftThumb.style.left = leftPercent + "%";
    this.rightThumb.style.left = rightPercent + "%";

    this.track.style.left = leftPercent + "%";
    this.track.style.right = 100 - rightPercent + "%";

    this.minPriceEl.textContent = "$ " + this.formatPrice(this.minValue);
    this.maxPriceEl.textContent = "$ " + this.formatPrice(this.maxValue);
  }

  formatPrice(price) {
    return Math.round(price).toLocaleString();
  }
}

// Initialize the slider when the page loads
document.addEventListener("DOMContentLoaded", () => {
  new DualRangeSlider();
});
