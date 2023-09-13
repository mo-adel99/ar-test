// AFRAME.registerComponent('mytarget', {
//   init: function () {
    
//     this.el.addEventListener('targetFound', event => {
//       const playBtn = document.querySelector("#thumbnail-button");

//       playBtn.addEventListener('click', () => {
//         playBtn.setAttribute("visible", false);
//         document.querySelector("#main-video").play();
//       });
    
//     });
//   }
// });


document.addEventListener("DOMContentLoaded", function(event) {
  const scene = document.querySelector("a-scene");
  const vid = document.getElementById("main-video");
  const videoEl = document.getElementById("video");

  if (scene.hasLoaded) {
    run();
  } else {
    scene.addEventListener("loaded", run);
  }
  
  function run () {
    if(AFRAME.utils.device.isMobile()) {
      document.querySelector('#thumbnail-button').addEventListener('click', function () {
        playVideo();
        this.style.display = 'none';
      })
    } else {
        playVideo();
    }
  }
  
  function playVideo () {
    vid.play();
    if(AFRAME.utils.device.isMobile()) {
      videoEl.components.material.material.map.image.play(); 
    }
  }
})