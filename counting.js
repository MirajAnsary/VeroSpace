const minInput = document.getElementById("range-min");
const maxInput = document.getElementById("range-max");
const minLabel = document.getElementById("min-value");
const maxLabel = document.getElementById("max-value");
const slider = document.querySelector(".slider");

function updateSlider() {
  const min = parseInt(minInput.min);
  const max = parseInt(maxInput.max);

  let minVal = parseInt(minInput.value);
  let maxVal = parseInt(maxInput.value);

  // Prevent overlap
  if (minVal > maxVal - 1000) minInput.value = maxVal - 1000;
  if (maxVal < minVal + 1000) maxInput.value = minVal + 1000;

  // Calculate percentage for fill
  const range = max - min;
  const minPercent = ((minInput.value - min) / range) * 100;
  const maxPercent = ((maxInput.value - min) / range) * 100;

  slider.style.setProperty("--minPercent", `${minPercent}%`);
  slider.style.setProperty("--maxPercent", `${maxPercent}%`);

  // Update price labels
  minLabel.textContent = `$${minInput.value}`;
  maxLabel.textContent = `$${maxInput.value}`;
}

minInput.addEventListener("input", updateSlider);
maxInput.addEventListener("input", updateSlider);

window.addEventListener("load", updateSlider);
