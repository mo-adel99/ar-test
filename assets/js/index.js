function playVideo () {
  const playBtn = document.querySelector("#thumbnail-button");

  playBtn.addEventListener('click', () => {
    playBtn.setAttribute("visible", false);
    document.querySelector("#video").setAttribute("src", "#main-video");
    document.querySelector("#main-video").play();
  });
}

AFRAME.registerComponent('mytarget', {
  init: function () {
      playVideo();
  }
});