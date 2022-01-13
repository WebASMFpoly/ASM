var slideIndex = 0;
showSlides();

// Next/previous controls
function plusSlides2(n) {
  showSlidesthree2(slideIndex += n);
}

function showSlidesthree2(n) {
  var i;
  var slides = document.getElementsByClassName("goiy-box");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("goiy-box");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
}