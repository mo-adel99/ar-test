
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
  
AFRAME.registerComponent('cc', {
  init: function () {
      const marker = document.querySelector("a-scene");

      marker.addEventListener("targetFound", evt => {
        setTimeout(evt => {
          this.el.setAttribute("position", marker.getAttribute("position"));
          this.el.setAttribute("rotation", marker.getAttribute("rotation"));
        }, 500)
      })
  }
});
