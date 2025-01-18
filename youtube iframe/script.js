document.addEventListener("DOMContentLoaded", function () {
  const yt_players = document.querySelectorAll(".youtube-player");
  yt_players.forEach((player) => {
    // let videoId = player.getAttribute("data-id");
    let videoId = player.dataset.id;
    let div = document.createElement("div");
    // thumb image
    let thumb = document.createElement("img");
    thumb.src = "https://img.youtube.com/vi/ID/maxresdefault.jpg".replace(
      "ID",
      videoId
    );
    div.appendChild(thumb);

    // play icon
    let play = document.createElement("div");
    play.setAttribute("class", "play");
    div.appendChild(play);
    div.onclick = function () {
      loadIframe(this, videoId);
    };

    player.appendChild(div);
  });
});

function loadIframe(div, videoId) {
  let iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  iframe.setAttribute("frameborder", 0);
  iframe.setAttribute("allowfullscreen", 1);
  iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
  iframe.setAttribute(
    "allow",
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  );
  div.parentNode.replaceChild(iframe, div);
}

// window.onload = () => {
//   const yt_players = document.querySelectorAll(".youtube-player");
//   console.log(yt_players);
// };
