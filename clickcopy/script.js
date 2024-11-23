// document, window
const copy_btns = document.querySelectorAll(".copy-btn");
copy_btns.forEach((btn) => {
  btn.onclick = () => {
    let text = btn.nextElementSibling.innerText;
    navigator.clipboard.writeText(text);
    // change btn icon
    btn.classList.remove("fa-clipboard");
    btn.classList.remove("far");
    btn.classList.add("fas");
    btn.classList.add("fa-check");

    setTimeout(() => {
      btn.classList.remove("fas");
      btn.classList.remove("fa-check");
      btn.classList.add("far");
      btn.classList.add("fa-clipboard");
    }, 1500);
  };
});
