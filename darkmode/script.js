// localStorage.setItem("name", "Mohammed");
// localStorage.setItem("name1", "Mohammed");
// localStorage.setItem("name2", "Mohammed");
// localStorage.getItem('name');
// localStorage.removeItem("name");
// localStorage.clear();

// console.log(localStorage.getItem("name"));

// const user = {
//   name: "Mohammed",
//   age: 30,
//   email: "moh@gmail.com",
// };

// localStorage.setItem("user", JSON.stringify(user));
// let newuser = JSON.parse(localStorage.getItem("user"));
// console.log(newuser.name);

// const marks = [10, 20, 18, 19];
// localStorage.setItem("marks", marks);
// console.log(localStorage.getItem("marks"));

const btn = document.querySelector(".mode");
// const body = document.querySelector('body');

btn.onclick = () => {
  //   console.log(document.body.classList.contains("dark"));
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    btn.innerText = "Dark";

    // remove mode key from localstorage
    localStorage.removeItem("mode");
  } else {
    document.body.classList.add("dark");
    btn.innerText = "Light";

    // set mode value to localstorage
    localStorage.setItem("mode", "dark");
  }
};

let mode = localStorage.getItem("mode");
if (mode) {
  document.body.classList.add(mode);
  btn.innerText = "Light";
}

// window.onload = () => {
//   //   console.log("Done");
//   let mode = localStorage.getItem("mode");
//   if (mode) {
//     document.body.classList.add(mode);
//     btn.innerText = "Light";
//   }
// };
