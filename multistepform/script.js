let currentStep = 0;
let prevBtn = document.querySelector("#prev");
let nextBtn = document.querySelector("#next");
let indicators = document.querySelectorAll(".indicator ul li");
let steps = document.querySelectorAll(".step");

prevBtn.onclick = (e) => {
  e.preventDefault();
  currentStep--;
  updateSteps();
};

nextBtn.onclick = (e) => {
  let errors = [];
  steps[currentStep].querySelectorAll("input").forEach((input) => {
    if (input.value == "") {
      input.style.borderColor = "red";
      errors.push(input);
    } else {
      input.style.borderColor = "#eee";
    }
  });

  if (errors.length > 0) {
    e.preventDefault();
    return;
  }

  if (currentStep == steps.length - 1) return;

  e.preventDefault();
  currentStep++;
  updateSteps();
};

function updateSteps() {
  if (currentStep == 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
  }

  if (currentStep == steps.length - 1) {
    nextBtn.textContent = "Submit";
  } else {
    nextBtn.textContent = "Next";
  }

  indicators.forEach((el) => el.classList.remove("active"));
  for (let i = 0; i <= currentStep; i++) {
    indicators[i].classList.add("active");
  }

  steps.forEach((el) => el.classList.remove("active"));
  steps[currentStep].classList.add("active");
}

updateSteps();
