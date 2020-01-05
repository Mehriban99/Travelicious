var slides = document.querySelectorAll("#slides .slide");
var currentslide = 0;
var interval = setInterval(nextslide, 5000)

function nextslide() {
    slides[currentslide].className = "slide";
    currentslide = (currentslide+1)%slides.length;
    slides[currentslide].className = " slide showing";
}


var images = document.querySelectorAll("#images .image");
var currentimage = 0;
var imageinterval = setInterval(nextimage, 5000)

function nextimage() {
    images[currentimage].className = "image";
    currentimage = (currentimage+1)%images.length;
    images[currentimage].className = "image showing";
}

var texts = document.querySelectorAll("#images .text");
var currenttext = 0;
var textinterval = setInterval(nexttext, 5000)

function nexttext() {
    texts[currenttext].className = "text";
    currenttext = (currenttext+1)%texts.length;
    texts[currenttext].className = "text show";
}




var images = document.querySelectorAll("#mediaimages .image");
var currentimage = 0;
var imageinterval = setInterval(nextimage, 5000)

function mediaimage() {
    images[currentimage].className = "image";
    currentimage = (currentimage+1)%images.length;
    images[currentimage].className = "image showing";
}


$(document).ready(function(){
    $("#menu").click(function(){
        $("#menu-content").css("width","50%");
    });

    $("#p1").click(function(){
        $("#menu-content").css("width","0");
    })
})


