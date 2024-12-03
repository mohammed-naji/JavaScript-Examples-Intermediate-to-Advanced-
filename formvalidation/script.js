const form = document.querySelector("form");
const inputs = document.querySelectorAll(".req");

// selector . event = action
form.onsubmit = (event) => {
  inputs.forEach((el) => {
    if (el.value == "") {
      event.preventDefault();
      el.nextElementSibling.style.display = "block";
      el.style.borderColor = "red";
    } else {
      el.nextElementSibling.style.display = "none";
      el.style.borderColor = "#c6c6c6";
    }
  });
};

// reset input style while typing
inputs.forEach((el) => {
  //   el.onkeyup = () => {
  el.onblur = () => {
    if (el.value != "") {
      el.nextElementSibling.style.display = "none";
      el.style.borderColor = "#c6c6c6";
    } else {
      el.nextElementSibling.style.display = "block";
      el.style.borderColor = "red";
    }
  };
});

// see password on click
const password = document.querySelector(".pass input");
const i = document.querySelector(".pass i");

i.onclick = () => {
  console.log(password.type);
  if (password.type == "password") {
    password.type = "text";
    i.classList.remove("fa-eye");
    i.classList.add("fa-eye-slash");
  } else {
    password.type = "password";
    i.classList.remove("fa-eye-slash");
    i.classList.add("fa-eye");
  }
};
