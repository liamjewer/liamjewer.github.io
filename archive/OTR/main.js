var toggle = true;
var i;
function clicked(){
      if(toggle){
            up();
      }else{
            down();
      }
      toggle = !toggle;
      document.getElementsByClassName("nav-icon")[0].classList.toggle("open");
}
function up(){
      var items = document.getElementsByClassName("link");
      for (i = 0; i < items.length; i++) {
            items[i].style.width = "200px";
      }
}
function down(){
      var items = document.getElementsByClassName("link");
      for (i = 0; i < items.length; i++) {
            items[i].style.width = "0";
      }
}