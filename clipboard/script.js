// selector.event = action
document.oncopy = () => {
  let text = window.getSelection().toString();
  let url = window.location.href;
  let final_text = text + "\n\nFor More Information : " + url;
  navigator.clipboard.writeText(final_text);
};
