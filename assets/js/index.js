AFRAME.registerComponent('mytarget', {
  init: function () {
    
    this.el.addEventListener('targetFound', event => {
      const playBtn = document.querySelector("#thumbnail-button");

      playBtn.addEventListener('click', () => {
        playBtn.setAttribute("visible", false);
        document.querySelector("#main-video").play();
      });
    
    });
  }
});