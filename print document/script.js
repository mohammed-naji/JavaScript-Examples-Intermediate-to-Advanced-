let form = document.querySelector("form");
let lang = document.querySelectorAll("[name=lang]");
let gender = document.querySelectorAll("[name=gender]");
let full_name = document.querySelector("#full_name");
let university = document.querySelector("#university");
let specialization = document.querySelector("#specialization");

form.onsubmit = (e) => {
  e.preventDefault();
  lang.forEach((el) => {
    if (el.checked) {
      lang = el.value;
    }
  });

  gender.forEach((el) => {
    if (el.checked) {
      gender = el.value;
    }
  });

  document.querySelector(".form").classList.add("none");
  document.querySelector(`.letter-${lang}`).classList.remove("none");
  document.querySelector(`.letter-${lang} .${gender}`).classList.remove("none");

  // fill values to letter
  document.querySelector(`.letter-${lang} .uni`).textContent = university.value;
  document.querySelectorAll(`.letter-${lang} .full_name`).forEach((el) => {
    el.textContent = full_name.value;
  });

  document.querySelector(`.letter-${lang} .sp`).textContent =
    specialization.value;
};
