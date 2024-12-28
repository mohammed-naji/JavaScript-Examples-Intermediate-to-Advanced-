const edits = document.querySelectorAll(".edit");
edits.forEach((edit) => {
  edit.onclick = () => {
    if (edit.classList.contains("done")) {
      edit
        .closest("tr")
        .querySelectorAll(".content")
        .forEach((el) => (el.contentEditable = false));
      edit.innerHTML = "Edit";
      edit.classList.remove("done");
    } else {
      edit
        .closest("tr")
        .querySelectorAll(".content")
        .forEach((el) => {
          //   el.setAttribute("contenteditable", "true");
          el.contentEditable = true;
        });
      edit.innerHTML = "Done";
      edit.classList.add("done");
    }
  };
});

const contents = document.querySelectorAll(".content");
contents.forEach((el) => {
  el.ondblclick = () => (el.contentEditable = true);
  el.onblur = () => (el.contentEditable = false);
});

const deletes = document.querySelectorAll(".delete");
deletes.forEach((el) => {
  el.onclick = () => {
    if (confirm("Are you sure?!")) {
      el.closest("tr").remove();
    }
  };
});
