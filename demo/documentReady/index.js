
document.ready = function (callback) {
  ///兼容FF,Google
  if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', function () {
      document.removeEventListener('DOMContentLoaded', arguments.callee, false);
      callback();
    }, false)
  }
  //兼容IE
  else if (document.attachEvent) {
    document.attachEvent('onreadystatechange', function () {
      if (document.readyState == "complete") {
        document.detachEvent("onreadystatechange", arguments.callee);
        callback();
      }
    })
  }
  else if (document.lastChild == document.body) {
    callback();
  }
}

//当初始的 HTML 文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发，而无需等待样式表、图像和子框架的完全加载。
document.addEventListener(
  "DOMContentLoaded",
  function() {
    //..............
  },
  false
);
