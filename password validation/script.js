const password = document.querySelector("input[type=password]");
const passlen = document.querySelector(".passlen");
const passsmall = document.querySelector(".passsmall");
const passcapital = document.querySelector(".passcapital");
const passspecial = document.querySelector(".passspecial");
const passdigits = document.querySelector(".passdigits");
const btn = document.querySelector(".btn");

password.onkeyup = () => {
  let errors = [];

  if (password.value.length >= 8) {
    passlen.classList.add("pass");
  } else {
    passlen.classList.remove("pass");
    errors.push("length error");
  }

  if (/[a-z]/.test(password.value)) {
    passsmall.classList.add("pass");
  } else {
    passsmall.classList.remove("pass");
    errors.push("small error");
  }

  if (/[A-Z]/.test(password.value)) {
    passcapital.classList.add("pass");
  } else {
    passcapital.classList.remove("pass");
    errors.push("capital error");
  }

  if (/[@$!%*?&]/.test(password.value)) {
    passspecial.classList.add("pass");
  } else {
    passspecial.classList.remove("pass");
    errors.push("special error");
  }

  if (/[0-9]/.test(password.value)) {
    passdigits.classList.add("pass");
  } else {
    passdigits.classList.remove("pass");
    errors.push("digits error");
  }

  if (errors.length > 0) {
    btn.setAttribute("disabled", "disabled");
  } else {
    btn.removeAttribute("disabled");
  }
};
