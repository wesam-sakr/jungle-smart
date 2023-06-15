$(document).ready(function () {
  $('select').niceSelect();
  $('.jquery-background-video').bgVideo({fadeIn: 2000});

  
	mapboxgl.accessToken = 'pk.eyJ1IjoiZWRrZiIsImEiOiJjamM2b2U4bDcwMm1tMndvNzI5dHQ1eTJtIn0.Ri6t-PZg3i5wivNlLehzVg';
  // These options control the camera position after animation
  const start = {
      center: [-73.983970, 40.702710],
      zoom: 2,
      pitch: 0,
      bearing: 0
  };
  const end = {
      center: [-73.983970, 40.702710],
      zoom: 12.5,
      bearing: 0,
      pitch: 0
  };
  const map = new mapboxgl.Map({
      container: 'map',
      // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
      style: 'mapbox://styles/mapbox/light-v11',
      ...start
  });

  map.on('style.load', () => {
      // Custom atmosphere styling
      map.setFog({
          'color': 'rgb(220, 159, 159)', // Pink fog / lower atmosphere
          'high-color': 'rgb(36, 92, 223)', // Blue sky / upper atmosphere
          'horizon-blend': 0.4 // Exaggerate atmosphere (default is .1)
      });

      map.addSource('mapbox-dem', {
          'type': 'raster-dem',
          'url': 'mapbox://mapbox.terrain-rgb'
      });

      map.setTerrain({
          'source': 'mapbox-dem',
          'exaggeration': 1.5
      });
  });

  let isAtStart = true;

  document.getElementById('fly').addEventListener('click', () => {
      // depending on whether we're currently at point a or b,
      // aim for point a or b
      const target = isAtStart ? end : start;
      isAtStart = !isAtStart;

      map.flyTo({
          ...target, // Fly to the selected target
          duration: 9000, // Animate over 12 seconds
          essential: false // This animation is considered essential with
          //respect to prefers-reduced-motion
      });
  });


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


