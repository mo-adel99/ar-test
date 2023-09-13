AFRAME.registerComponent('clickHandler', {
  init: function () {
    
    this.el.addEventListener('click', e => {
      
      this.el.setAttribute("visible", false);
      document.querySelector("#main-video").play();
    
    });
  }
});


