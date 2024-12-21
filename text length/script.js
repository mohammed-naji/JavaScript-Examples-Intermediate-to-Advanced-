const editors = document.querySelectorAll(".textarea");

editors.forEach((el) => {
  el.onkeyup = () => {
    let max = el.getAttribute("data-max");

    let sp = el.nextElementSibling.querySelector("span");
    sp.innerHTML = max - el.textContent.length;
    if (sp.innerHTML < 0) {
      sp.style.color = "red";
    } else {
      sp.style.color = "black";
    }

    // change the max text with red color
    if (el.textContent.length > max) {
      let main_text = el.textContent.substring(0, max);
      let remain_text = el.textContent.substring(max);
      el.innerHTML = `${main_text}<span>${remain_text}</span>`;
    }

    // move the cursor to the end
    let range = document.createRange();
    let selection = window.getSelection();
    range.selectNodeContents(el);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);
  };
});
