var lines = [];
showAll();
$(document).ready(function() {
      $.ajax({
            type: "GET",
            url: "res/home/data.csv",
            dataType: "text",
            success: function(data) {processData(data);}
      });
});

function processData(allText) {
      var allTextLines = allText.split(/\r\n|\n/);
      var headers = allTextLines[0].split(',');

      for (var i=1; i<allTextLines.length; i++) {
            var data = allTextLines[i].split(',');
            if (data.length == headers.length) {
                  var tarr = [];
                  for (var j=0; j<headers.length; j++) {
                  tarr.push(data[j]);
                  }
                  lines.push(tarr);
            }
      }
      for(var i = 0; i < lines.length; i++){
            var vidBox = document.createElement("div");
            vidBox.className = "vidbox " + lines[i][3];

            var thumbnail = document.createElement("img");
            thumbnail.src = lines[i][5];
            thumbnail.className = "thumbnail";

            var container = document.createElement("div");
            container.className = "container";

            var overlay = document.createElement("div");
            overlay.className = "overlay";
            overlay.setAttribute("onclick", "pop("+i+");");
            
            var icon = document.createElement("i");
            icon.className = "fas fa-play fa-4x icon";
            icon.id = lines[i][4];
            icon.setAttribute("onclick", "pop("+i+");");

            overlay.append(icon);

            container.append(thumbnail);
            container.append(overlay);

            var titleNode = document.createTextNode(lines[i][0]);
            var titleElement = document.createElement("h1");
            titleElement.append(titleNode);
            titleElement.className = "title";

            var dateNode = document.createTextNode(lines[i][2]);
            var date = document.createElement("h2");
            date.append(dateNode);

            var paraNode = document.createTextNode(lines[i][1]);
            var para = document.createElement("p");
            para.append(paraNode);

            vidBox.append(container);
            vidBox.append(titleElement);
            document.getElementById("videos").append(vidBox);
      }
}

function pop (index){
      document.getElementById("popup").style.display = "table";
      document.getElementById("popSource").src = lines[index][4];
      document.getElementById("popVid").load();
      document.getElementById("popTitle").innerHTML = lines[index][0];
      document.getElementById("popDate").innerHTML = lines[index][2];
      document.getElementById("popDesc").innerHTML = lines[index][1];
      document.body.style.overflow = 'hidden';
}

function hide(){
      document.getElementById("popup").style.display = "none";
      document.getElementById("popVid").pause();
      document.body.style.overflowY = 'auto';
}

function filter(target, obj){
      var all = document.getElementsByClassName("vidbox");
      var targets = document.getElementsByClassName(target);
      var filters = document.getElementsByClassName("filter");
      document.getElementById("dropBtn").innerHTML = obj.innerHTML;

      for(i = 0; i<filters.length; i++){
            filters[i].style.color = "#595959";
      }

      obj.style.color = "var(--accent-color)";

      for(i = 0; i < all.length; i++){
            all[i].style.display = "none";
      }

      for(i = 0; i < targets.length; i++){
            targets[i].style.display = "block";
      }
      document.getElementById("filters").style.height = 0;
      document.getElementById("filters").style.border = "none";
}

function showAll(){
      var all = document.getElementsByClassName("vidbox");
      var filters = document.getElementsByClassName("filter");

      document.getElementById("dropBtn").innerHTML = "All";

      for(i = 0; i<filters.length; i++){
            filters[i].style.color = "#595959";
      }

      filters[0].style.color = "var(--accent-color)";

      for(i = 0; i < all.length; i++){
            all[i].style.display = "block";
      }
}

window.onkeyup = function(e) {
      var key = e.keyCode ? e.keyCode : e.which;
   
      if (key == 27) {
          hide();
      }
}

document.documentElement.addEventListener("click", function(e) {
      if (e.target.id === "popContent" || e.target.tagName === "CENTER") {
            hide();
      }
});