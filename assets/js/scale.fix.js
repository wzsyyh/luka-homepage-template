
(function(document) {
  var metas = document.getElementsByTagName("meta");

  function changeViewportContent(content) {
    for (var i = 0; i < metas.length; i++) {
      if (metas[i].name === "viewport") {
        metas[i].content = content;
      }
    }
  }

  function initialize() {
    changeViewportContent("width=device-width, minimum-scale=1.0, maximum-scale=1.0");
  }

  function gestureStart() {
    changeViewportContent("width=device-width, minimum-scale=0.25, maximum-scale=1.6");
  }

  function gestureEnd() {
    initialize();
  }

  if (navigator.userAgent.match(/iPhone/i)) {
    initialize();
    document.addEventListener("touchstart", gestureStart, false);
    document.addEventListener("touchend", gestureEnd, false);
  }
})(document);
