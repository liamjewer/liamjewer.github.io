var lines = [];
var one = document.getElementById("one");
var two = document.getElementById("two");
var flipper = true;
var srcs = [];
var titles = [];
var descs = [];
var current = 0;
var title = document.getElementById("title");
var desc = document.getElementById("description");
var sites = document.getElementById("sites");
var colours = ["#ff5555", "#55ff55", "#5555ff", "#ff7a55", "#ff557a", "#7aff55", "#55ff7a", "#7a55ff", "#557aff"];
var activeFilter;
var filters = [];


function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split('|');

    for (var i = 1; i < allTextLines.length; i++) {
        var data = allTextLines[i].split('|');
        if (data.length == headers.length) {
            var tarr = [];
            for (var j = 0; j < headers.length; j++) {
                tarr.push(data[j]);
            }
            lines.push(tarr);
        }
    }
}

function processDataCycler(allText) {
    processData(allText);

    var queryString = new Array();
    if (queryString.length == 0) {
        if (window.location.search.split('?').length > 1) {
            var params = window.location.search.split('?')[1].split('&');
            for (var i = 0; i < params.length; i++) {
                var key = params[i].split('=')[0];
                var value = decodeURIComponent(params[i].split('=')[1]);
                queryString[key] = value;
            }
        }
    }
    if (queryString["filter"] != null && queryString["filter"] != "undefined") {
        activeFilter = queryString["filter"];
    }
    for (var i = 0; i < lines.length; i++) {
        if (activeFilter != undefined) {
            if (lines[i][4].split(" ").includes(activeFilter)) {
                srcs.push(lines[i][0]);
                titles.push(lines[i][1]);
                descs.push(lines[i][2]);
            }
        } else {
            srcs.push(lines[i][0]);
            titles.push(lines[i][1]);
            descs.push(lines[i][2]);
        }
    }
    if (queryString["site"] != null) {
        if (srcs.length > 1) {
            one.src = srcs[titles.indexOf(queryString["site"]) + 1];
        } else {
            one.src = srcs[0];
        }
        console.log(titles);
        console.log(titles.indexOf(queryString["site"]));
        two.src = srcs[titles.indexOf(queryString["site"])];

        current = titles.indexOf(queryString["site"]);
        title.innerHTML = titles[current];
        desc.innerHTML = descs[current];
    } else {
        one.src = srcs[1];
        two.src = srcs[0];

        title.innerHTML = titles[current];
        desc.innerHTML = descs[current];
    }

}

function processDataGrid(allText) {
    processData(allText);
    var img;
    var container;
    var overlay;
    var text;
    var tempFilters = [];
    for (var i = lines.length - 1; i >= 0; i--) {
        tempFilters = lines[i][4].split(" ");
        for (var n = 0; n < tempFilters.length; n++) {
            if (!filters.includes(tempFilters[n])) {
                filters.push(tempFilters[n]);
                document.getElementById("filters").innerHTML += "<a onclick=\"filter('" + tempFilters[n] + "')\">" + tempFilters[n] + "</a>";
            }
        }

        container = document.createElement("div");
        container.className = "container " + lines[i][4];
        container.id = lines[i][1];

        overlay = document.createElement("div");
        overlay.className = "overlay overlayBottom";
        overlay.style.backgroundColor = colours[Math.floor(Math.random() * colours.length)];
        overlay.setAttribute("onclick", "redirect(\"websites-cycler?site=" + lines[i][1] + "&filter=" + activeFilter + "\");");

        text = document.createElement('div');
        text.className = "text";
        text.innerHTML = "<b>" + lines[i][1] + "</b>" + "<br>click for more info <br> or Jump to <a href=" + lines[i][3] + ">site</a>";

        img = document.createElement("img");
        img.src = lines[i][0];
        img.alt = lines[i][1];

        container.append(img);
        overlay.append(text);
        container.append(overlay);
        sites.append(container);
    }
}

function redirect(url) {
    window.location.href = url;
}


function next() {
    if (current + 1 < srcs.length) {
        current++;
    } else {
        current = 0;
    }
    if (flipper) {
        one.src = srcs[current];
        one.className = "thumbnailTopNext";
        two.className = "thumbnailBottomNext";
        setTimeout(() => { //halfway through animation change text because this is when it is completely covered by pic
            title.innerHTML = titles[current];
            desc.innerHTML = descs[current];
        }, 250);
        flipper = false;
    } else {
        two.src = srcs[current];
        two.className = "thumbnailTopNext";
        one.className = "thumbnailBottomNext";
        setTimeout(() => { //halfway through animation change text because this is when it is completely covered by pic
            title.innerHTML = titles[current];
            desc.innerHTML = descs[current];
        }, 250);
        flipper = true;
    }
}

function previous() {
    if (current - 1 >= 0) {
        current--;
    } else {
        current = srcs.length - 1;
    }
    console.log(current);

    if (flipper) {
        one.src = srcs[current];
        two.className = "thumbnailTopPrevious";
        one.className = "thumbnailBottomPrevious";
        setTimeout(() => { //halfway through animation change text because this is when it is completely covered by pic
            title.innerHTML = titles[current];
            desc.innerHTML = descs[current];
        }, 250);
        flipper = false;
    } else {
        two.src = srcs[current];
        one.className = "thumbnailTopPrevious";
        two.className = "thumbnailBottomPrevious";
        setTimeout(() => { //halfway through animation change text because this is when it is completely covered by pic
            title.innerHTML = titles[current];
            desc.innerHTML = descs[current];
        }, 250);
        flipper = true;
    }
}

function filter(filter) {
    activeFilter = filter;
    var children = document.getElementById("sites").childNodes;
    for (let i = 3; i < children.length; i++) {
        const element = children[i];
        if (!element.classList.contains(filter)) {
            element.style.display = "none";
        } else {
            element.style.display = "block";
            element.setAttribute("onclick", "redirect(\"websites-cycler?site=" + element.id + "&filter=" + activeFilter + "\");");
        }
    }
}