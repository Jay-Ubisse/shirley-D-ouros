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

  /**Codigo para mudanca de conteudo de pagina */
  $("#faq").hide();
  $("#about").hide();

  $("#home").click(function() {
    $("#about-us").css( {
      "color": "#78290f",
      "background-color": "#ffecd1"
    });
    $("#home").css( {
      "color": "white",
      "background-color": "#78290f"
    });
    $("#frequent").css( {
      "color": "#78290f",
      "background-color": "#ffecd1"
    });

    $("#slideshow").fadeIn(300);
    $("#faq").hide();
    $("#about").hide();

  });
  $("#about-us").click(function() {
    $("#about-us").css( {
      "color": "white",
      "background-color": "#78290f"
    });
    $("#home").css( {
      "color": "#78290f",
      "background-color": "#ffecd1"
    });
    $("#frequent").css( {
      "color": "#78290f",
      "background-color": "#ffecd1"
    });

    $("#slideshow").hide();
    $("#faq").hide();
    $("#about").fadeIn(300);

  });
  $("#frequent").click(function() {
    $("#about-us").css( {
      "color": "#78290f",
      "background-color": "#ffecd1"
    });
    $("#home").css( {
      "color": "#78290f",
      "background-color": "#ffecd1"
    });
    $("#frequent").css( {
      "color": "white",
      "background-color": "#78290f"
    });

    $("#slideshow").hide();
    $("#faq").fadeIn(300);
    $("#about").hide();

  });
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