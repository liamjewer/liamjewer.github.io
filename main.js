var toggle = true;

function clicked() {
    document.getElementsByClassName("nav-icon")[0].classList.toggle("open");
    document.getElementsByClassName("circle")[0].classList.toggle("bounce-left");
    //document.getElementsByClassName("circle")[1].classList.toggle("bounce");
    document.getElementsByClassName("circle")[1].classList.toggle("bounce-right");
    if (toggle) {
        document.getElementById("nav-container").style.transform = "rotateX(0deg)";

    } else {
        document.getElementById("nav-container").style.transform = "rotateX(90deg)";
    }
    toggle = !toggle;
}

function clickedMobile() {
    document.getElementsByClassName("nav-icon")[0].classList.toggle("open");
    //document.getElementsByClassName("section")[0].classList.toggle("bounce");
    document.getElementsByClassName("section")[0].classList.toggle("bounce-left");
    document.getElementsByClassName("section")[1].classList.toggle("bounce-right");
    if (toggle) {
        document.getElementById("mobinav").style.transform = "rotateX(0deg)";

    } else {
        document.getElementById("mobinav").style.transform = "rotateX(90deg)";
    }
    toggle = !toggle;
}