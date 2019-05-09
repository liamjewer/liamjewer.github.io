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
    img.src = "res/Nav_Logo.svg";
    img.style.height = "80%";
  }, 500);
}
window.onload = function() {
  glitch();
}

$(document).scroll(function() {
  document.getElementById("gear").style.transform = "rotate(" + $(document).scrollTop()/5 + "deg)"
  document.getElementById("gear2").style.transform = "rotate(" + $(document).scrollTop()/-3.3 + "deg)"
});
var dropped = false;
function drop(){
  if(!dropped){
    document.getElementById("dropNav").style.transform = "rotatey(0deg)";
    $("body").css("overflow", "hidden");
    dropped = true;
  }else{
    document.getElementById("dropNav").style.transform = "rotatey(90deg)";
    $("body").css("overflow", "auto");
    dropped = false;
  }
}