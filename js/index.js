// JavaScript Document
$(document).scroll(function() {
	$("#scrollFade").fadeOut("fast");
});

var Portmodal = document.getElementById("PortModal");


var Portbtn = document.getElementById("PortBtn");


var CloseBtn = document.getElementsByClassName("close")[0];


Portbtn.onclick = function() {
  Portmodal.style.display = "block";
}


CloseBtn.onclick = function() {
  Portmodal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == Portmodal) {
    Portmodal.style.display = "none";
  }
}