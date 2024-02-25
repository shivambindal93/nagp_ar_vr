/* global AFRAME */
AFRAME.registerComponent("play-on-click", {
  isPaused: true,
  init: function () {
    this.onClick = this.onClick.bind(this);
  },
  play: function () {
    window.addEventListener("click", this.onClick);
  },
  pause: function () {
    window.removeEventListener("click", this.onClick);
  },
  onClick: function (evt) {
    debugger;
    var objId = this.el.getAttribute("id");
    if (!objId) {
      return;
    }

    if (objId === "bunny") {
      const videoEl = this.el.getAttribute("material").src;
      if (!videoEl) {
        return;
      }
      videoEl.play();
    } else if (objId === "animatedBox") {
      this.el.object3D.animation__position =
        "property: position; to: 0 1 -1; dur: 2000; easing: linear; loop: true";
      this.el.object3D.animation__position =
        "property: position; to: 0 1 -1; dur: 2000; easing: linear; loop: true";
      this.el.animation__position =
        "property: position; to: 0 1 -1; dur: 2000; easing: linear; loop: true";
    }
  },
});
