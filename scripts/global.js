$(document).ready(function() {

/**Codigo para o menu (versao mobile) */

  $("#menu-icon").hide();

  if($(window).width() < 900){
    $("#menu-icon").show();
    $("#menu").hide();
    $("#menu-icon").click(function () {
      if ($("#menu").is(':hidden')) {
        $("#menu").slideDown(300);
      } else {
        $("#menu").slideUp(300);
      }
    });
  }
});

  /**Codigo para o slide show */

  let slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }