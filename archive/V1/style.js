var nav = document.getElementById("nav");
var banners = document.getElementById("banners");
var content = document.getElementById("dropdown-content");
var dropdown = document.getElementById("dropdown-mobile");
var dropdown_desktop = document.getElementById("dropdown");
var ddc = document.getElementById("dropdown-content-mobile");
var as = document.getElementById("as-mobile");
var a = as.getElementsByTagName("a");
var asdesktop = document.getElementById("as");
var adesktop = asdesktop.getElementsByTagName("a");
var flop = true;
var btn = document.getElementById("dropbtn-mobile");
var clicked = false;

banners.style.paddingTop = nav.offsetHeight - 2 + "px";
content.style.top = nav.offsetHeight - 2 + "px";

function out(){
  delay = 0.1;
  ddc.style.transitionDelay = "0.1s";
  for (var i = 0; i < a.length; i++) {
    a[i].style.transitionDelay = delay + "s";
    delay += 0.1;
  }

  ddc.style.height = (a[0].clientHeight * 7) + "px";
  for (var i = 0; i < a.length; i++) {
    a[i].style.marginLeft = "0";
  }
  btn.style.transform = "rotate(180deg)";
  btn.src = "Res/symbols/close.png";
  btn.style.transform = "rotate(180deg)";
  flop = false;
}

function close(){
  delay = 0.35;
  ddc.style.transitionDelay = "0.1s";
  for (var i = 0; i < a.length; i++) {
    a[i].style.transitionDelay = delay + "s";
    delay -= 0.05;
  }

  ddc.style.height = "0px";
  for (var i = 0; i < a.length; i++){
    a[i].style.marginLeft = "200%";
  }
  btn.style.transform = "rotate(-180deg)";
  btn.src = "Res/symbols/dropdown.png";
  btn.style.transform = "rotate(-180deg)";
  flop = true;
}

function drop () {
  clicked = true;
  if (flop){
    out();
  }else{
    close();
  }
}
dropdown_desktop.onmouseover = function() {
  delay = 0.2;
  content.style.transitionDelay = "0s";
  for (var i = 0; i < adesktop.length; i++) {
    adesktop[i].style.transitionDelay = delay + "s";
    delay += 0.2;
  }
 }
dropdown_desktop.onmouseout  = function() {
  delay = 0.4;
  content.style.transitionDelay = "0.1s";
  for (var i = 0; i < adesktop.length; i++) {
    adesktop[i].style.transitionDelay = delay + "s";
    delay -= 0.1;
  }
 }

 $(function(){

 	var $win = $(window); // or $box parent container
 	var $box = $("#dropdown-mobile");

 	 $win.on("click.Bst", function(event){
 			if ($box.has(event.target).length == 0 && !$box.is(event.target)){
         if (clicked) {
           close();
         }
 			}
 	  });
 });

 window.onorientationchange = function() {
        var orientation = window.orientation;
            switch(orientation) {
                case 0:
                case 90:
                case -90: window.location.reload();
                break; }
    };
