var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos <= currentScrollPos) {
    document.getElementById("nav-bottom").style.display ="none";
  } else {
    document.getElementById("nav-bottom").style.display = "block";
  }
  prevScrollpos = currentScrollPos;
}
