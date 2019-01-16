$.setInterval = function (fn, interval) {
  var body = $('body');
  var queueInterval = function () {
    body
    .delay(interval)
    .queue(function(dequeue) {
      fn();
      queueInterval();
      dequeue();
    });
  };
  queueInterval();
};
function glitch(){
  var img = document.getElementById("nav_logo");
  img.src = "res/glitch.gif";
  img.style.height = "100%";
  window.setTimeout(function(){
    img.src = "res/nav_logo.svg";
    img.style.height = "80%";
  }, 500);
}
window.onload = function() {
  glitch();
}