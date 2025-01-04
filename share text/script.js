let share = document.querySelector(".share");
let fb = document.querySelector(".face");
let x = document.querySelector(".x");
let m = document.querySelector(".m");

document.onmouseup = (e) => {
  if (e.target.closest("div").classList.contains("share")) return;
  share.style.display = "none";
  let text = window.getSelection().toString();
  if (text.split(" ").length > 1) {
    share.style.display = "block";
    share.style.top = e.layerY + "px";
    share.style.left = e.layerX + 10 + "px";
  }
};

fb.onclick = () => {
  let url =
    "https://www.facebook.com/sharer/sharer.php?u=" + window.location.href;
  window.open(url, "_blank");
};

x.onclick = () => {
  let url =
    "https://x.com/intent/tweet?text=" + window.getSelection().toString();
  window.open(url, "_blank");
};

m.onclick = () => {
  let url =
    "mailto:admin@gmail.com?subject=text&body=" +
    window.getSelection().toString();
  window.open(url, "_blank");
};
