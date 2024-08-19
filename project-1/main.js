// working with window operations!

window.onresize = screen;
window.onload = screen;

function screen() {
  myWidth = window.innerWidth;
  myHeight = window.innerHeight;

  document.getElementById("size").innerHTML = "width: " + myWidth + "px";
  //   document.getElementById("size").innerHTML = "height: " + myHeight;
}
