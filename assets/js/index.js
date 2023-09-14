
document.addEventListener("DOMContentLoaded", function(){
  AFRAME.registerComponent('click-handler', {
    init: function () {
      
      this.el.addEventListener('click', e => {
        this.el.setAttribute("visible", false);
        document.querySelector("#main-video").play();
      });
    }
  });
});
  
// AFRAME.registerComponent('track-logic', {
//   init: function () {
//       const tracked = document.querySelector(".tracked");

//       tracked.addEventListener("targetFound", evt => {
//           this.el.setAttribute("position", tracked.getAttribute("position"));
//           this.el.setAttribute("rotation", tracked.getAttribute("rotation"));
//       })
//   }
// });
