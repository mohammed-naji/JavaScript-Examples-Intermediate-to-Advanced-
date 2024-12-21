let items = [
  {
    title: "Title 1",
    content: "Content 1 | lorem...",
  },
  {
    title: "Title 2",
    content: "Content 2 | lorem...",
  },
  {
    title: "Title 3",
    content: "Content 3 | lorem...",
  },
];
const wrapper = document.querySelector(".wrapper");
loadContent();
function loadContent() {
  let content = "";
  items.forEach((item) => {
    content += `<div class="item">
        <div class="title">
            ${item.title}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path
                    d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z">
                </path>
            </svg>
        </div>
        <div class="content">
            <p>${item.content}</p>
        </div>
    </div>`;
  });

  wrapper.innerHTML = content;
}

// Show accordion after click on title
// const titles = document.querySelectorAll(".wrapper .title");
// console.log(titles);

wrapper.onclick = (e) => {
  const parent = e.target.closest("div");
  if (parent.classList.contains("title")) {
    // check if item is showed
    if (parent.parentElement.classList.contains("show")) {
      parent.parentElement.classList.remove("show");
    } else {
      const all_items = wrapper.querySelectorAll(".item");
      all_items.forEach((el) => el.classList.remove("show"));
      parent.parentElement.classList.add("show");
    }
  }
};
