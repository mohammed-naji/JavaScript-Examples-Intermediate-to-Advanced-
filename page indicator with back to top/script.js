const indicator = document.querySelector(".page-indicator");
const top_btn = document.querySelector(".top");

window.onscroll = () => {
  let top =
    window.scrollY ||
    document.body.scrollTop ||
    document.documentElement.scrollTop;

  if (top > 100) {
    indicator.classList.add("show");
  } else {
    indicator.classList.remove("show");
  }

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (top / height) * 100 * 3.6;
  indicator.style.background = `conic-gradient(#540f85 ${scrolled}deg, #e1e1e1 0deg)`;

  //   console.log(height);
};

top_btn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
