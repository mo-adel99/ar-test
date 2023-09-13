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


// AFRAME.registerComponent('mytarget', {
//   init: function() {
//     this.onClick = this.onClick.bind(this);
//   },
//   play: function() {
//     window.addEventListener('click', this.onClick);
//   },
//   pause: function() {
//     window.removeEventListener('click', this.onClick);
//   },
//   onClick: function(evt) {
//     var videoEl = this.el.getAttribute('material').src;
//     if (!videoEl) {
//       return;
//     }
//     this.el.object3D.visible = true;
//     videoEl.play();
//   }
// });


const playBtn = document.querySelector("#thumbnail-button");
playBtn.addEventListener("click", function(){
  playBtn.setAttribute("visible", false);
  document.querySelector("#main-video").play();
})
