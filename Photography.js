function on(img) {
      document.getElementById("overlay").style.display = "block";
      document.getElementById("enlarged").src = img.src;
  }
  
  function off() {
      document.getElementById("overlay").style.display = "none";
  }

  var photos = document.getElementById("photos");
  var imgs = photos.getElementsByTagName("img");
  
  function toggle(btn){
    if (hidden) {
      document.getElementById("filter").style.display = "block";
      hidden = false;
      btn.getElementsByTagName("p")[0].innerHTML = "hide filters";
    }else{
      document.getElementById("filter").style.display = "none";
      hidden = true;
      btn.getElementsByTagName("p")[0].innerHTML = "show filters";
    }
  }
  
  var hidden = true;
  function filter(){
    showall();
    var filters = document.getElementsByClassName("filters");
    for (var i = 0; i < filters.length; i++) {
      if(filters[i].checked){
            nonechecked = false;
      }
    }
    if (!nonechecked) {
      for(var i = 0; i < imgs.length; i++){
        imgs[i].style.display = "none";
        console.log(imgs[i].src);
        
      }
      for (var i = 0; i < filters.length; i++) {
        if(filters[i].checked){
          show = document.getElementsByClassName(filters[i].value);
          for (var n = 0; n < show.length; n++) {
            show[n].style.display = "inline-block";
          }
        }
      }
    }
  }

  function showall(){
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].style.display = "inline-block";
    }
  }