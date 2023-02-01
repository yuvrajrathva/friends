// Slides
let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides((slideIndex += n));
}
function change(){
    ssetTimeout(plusSlides(n), 2000);
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex - 1].style.display = "block";
}

// Navbar
function myFunction() {
  var x = document.getElementById("mynavbar-right-section");
  if (x.className === "navbar-right-section") {
    x.className += " responsive";
  } else {
    x.className = "navbar-right-section";
  }
}