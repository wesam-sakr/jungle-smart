$(document).ready(function () {
  $('select').niceSelect();
  $('.jquery-background-video').bgVideo({fadeIn: 2000});



  //loader
  $(document).ready(function () {
  setTimeout(function () {$(".loader").fadeOut(1000);})
    $('.partners .owl-carousel').owlCarousel({
      center: true,
      loop: true,
      nav: true,
      rtl: true,
      margin: 10,
      items: 6,
      responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 3,
        },
        900: {
          items: 4,
        },
        1000: {
          items: 6,
        },
      },
    });
    $(".rev-client .owl-carousel").owlCarousel({
      loop: true,
      nav: true,
      rtl: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1,
        }
      }
    });
    $(".carousel-compare.owl-carousel").owlCarousel({
      loop: true,
      margin: 5,
      nav: false,
      rtl: true,
      responsive: {
        200: {
          items: 1,
        },
        400: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 2,
        },
        1200: {
          items: 2.2,
        },
      },
    });

    $(".offers-finall .owl-carousel").owlCarousel({
      loop: true,
      margin: 5,
      nav: false,
      rtl: true,
      margin: 50,
      responsive: {
        0: {
          items: 1,
        },
        400: {
          items: 1.5,
        },
        600: {
          items: 2.2,
        },
        800: {
          items: 3,
        },

        1000: {
          items: 3.4,
        },
        1100: {
          items: 3.9,
          items: 4,
        },

        1200: {
          items: 4.5,
        },
          items: 5,
        }
    });
  });



});

jQuery(document).ready(function() {
  
  jQuery(".c-slider-init").slick({
    dots: false,
    nav: false,
    rtl:true,
    arrows: false,
    infinite: true,
    // speed: 1200,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    draggable: true,
    pauseOnFocus: true,
    pauseOnHover: true
  });

  jQuery(".slick-current").addClass("initialAnimation");

  let transitionSetup = {
    target: ".slick-list",
    enterClass: "u-scale-out",
    doTransition: function() {
      var slideContainer = document.querySelector(this.target);
      slideContainer.classList.add(this.enterClass);
      jQuery(".slick-current").removeClass("animateIn");
    },
    exitTransition: function() {
      var slideContainer = document.querySelector(this.target);
      setTimeout(() => {
        slideContainer.classList.remove(this.enterClass);
        jQuery(".slick-current").addClass("animateIn");
      }, 2000);
    }
  };

  var i = 0;
  // On before slide change
  jQuery(".c-slider-init").on("beforeChange", function(
                              event,
                               slick,
                               currentSlide,
                               nextSlide
                              ) {
    if (i == 0) {
      event.preventDefault();
      transitionSetup.doTransition();
      i++;
    } else {
      i = 0;
      transitionSetup.exitTransition();
    }

    jQuery(".c-slider-init").slick("slickNext");
    jQuery(".slick-current").removeClass("initialAnimation");
  });
  new WOW().init();
});



// =========================


