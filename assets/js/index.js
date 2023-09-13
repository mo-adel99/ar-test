function playVideo () {
  const playBtn = document.querySelector("#thumbnail-button");

  playBtn.addEventListener('click', () => {
    playBtn.setAttribute("visible", false);
    // const testVideo = document.createElement( "video" );
    // const canplayWebm = testVideo.canPlayType( 'video/webm; codecs="vp8, vorbis"' );
    // if (canplayWebm == "") {
    //   document.querySelector("#paintandquest-video-link").setAttribute("src", "#paintandquest-video-mp4");
    //   document.querySelector("#paintandquest-video-mp4").play();
    // } else {
    //   document.querySelector("#paintandquest-video-link").setAttribute("src", "#paintandquest-video-webm");
    //   document.querySelector("#paintandquest-video-webm").play();
    // }

    //   document.querySelector("#paintandquest-video-link").setAttribute("src", "#paintandquest-video-mp4");
    //   document.querySelector("#paintandquest-video-mp4").play();
    document.querySelector("#main-video").play();
  });
}

AFRAME.registerComponent('mytarget', {
  init: function () {
    this.el.addEventListener('targetFound', event => {
      playVideo();
    });
    this.el.addEventListener('targetLost', event => {
      console.log("target found");
    });
  }
});