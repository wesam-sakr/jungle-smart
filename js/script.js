$(document).ready(function () {
  if($('select').length>0){
    $('select').niceSelect();
  }
  $('.jquery-background-video').bgVideo({fadeIn: 2000});

  // sev
  /*--------------------
  Vars
  --------------------*/
  let progress = 50
  let startX = 0
  let active = 0
  let isDown = false

  /*--------------------
  Contants
  --------------------*/
  const speedWheel = 0.02
  const speedDrag = -0.1

  /*--------------------
  Get Z
  --------------------*/
  const getZindex = (array, index) => (array.map((_, i) => (index === i) ? array.length : array.length - Math.abs(index - i)))

  /*--------------------
  Items
  --------------------*/
  const $items = document.querySelectorAll('.services .serv-item')
  const $cursors = document.querySelectorAll('.services .cursor')

  const displayItems = (item, index, active) => {
    // console.log(item);
    const zIndex = getZindex([...$items], active)[index]
    item.style.setProperty('--zIndex', zIndex)
    item.style.setProperty('--active', (index-active)/$items.length)
  }

  /*--------------------
  Animate
  --------------------*/
  const animate = () => {
    progress = Math.max(0, Math.min(progress, 100))
    active = Math.floor(progress/100*($items.length-1))
    
    $items.forEach((item, index) => displayItems(item, index, active))
  }
  animate()

  /*--------------------
  Click on Items
  --------------------*/
  $items.forEach((item, i) => {
    item.addEventListener('click', () => {
      console.log(i);
      progress = (i/$items.length) * 100 + 10
      animate()
    })
  })

  /*--------------------
  Handlers
  --------------------*/
  const handleWheel = e => {
    const wheelProgress = e.deltaY * speedWheel
    progress = progress + wheelProgress
    animate()
  }

  const handleMouseMove = (e) => {
    if (e.type === 'mousemove') {
      $cursors.forEach(($cursor) => {
        $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      })
    }
    if (!isDown) return
    const x = e.clientX || (e.touches && e.touches[0].clientX) || 0
    const mouseProgress = (x - startX) * speedDrag
    progress = progress + mouseProgress
    startX = x
    animate()
  }

  const handleMouseDown = e => {
    isDown = true
    startX = e.clientX || (e.touches && e.touches[0].clientX) || 0
  }

  const handleMouseUp = () => {
    isDown = false
  }

  /*--------------------
  Listeners
  --------------------*/
  document.addEventListener('mousewheel', handleWheel)
  document.addEventListener('mousedown', handleMouseDown)
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)
  document.addEventListener('touchstart', handleMouseDown)
  document.addEventListener('touchmove', handleMouseMove)
  document.addEventListener('touchend', handleMouseUp)
  // --------

  // map
  if($('#location').length>0){
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
    })
  }
  // ------
  $(function () {
    if($("#your-rate").length>0){
      $("#your-rate").rateYo({
        starWidth: "15px",
        ratedFill: "#FFC107",
        rating: 0,
        fullStar: true,
        rtl: true
      });
    }
    
    if($("#your-rate-provider").length>0){
      $("#your-rate-provider").rateYo({
        starWidth: "15px",
        ratedFill: "#FFC107",
        rating: 0,
        fullStar: true,
        rtl: true
      }); 
    }
  })
  //loader
  setTimeout(function () {$(".loader").fadeOut(1000);})

    //when we choose a pic to upload

    if($('#photo').length>0){
      const img = document.querySelector('#photo');
      const file = document.querySelector('#file');
    
      file.addEventListener('change', function(){
        const choosedFile = this.files[0];
        if (choosedFile) {
            const reader = new FileReader(); 
            reader.addEventListener('load', function(){
                img.setAttribute('src', reader.result);
            });
            reader.readAsDataURL(choosedFile);
        }
      });
    }
  

  // carousel
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
  $('.most-wanted-slider .owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    rtl: true,
    margin: 10,
    items: 4,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2,
      },
      900: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
  
});
  if($('.gallery-link').length>0){
    (function() {
      $('.gallery-link').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
          verticalFit: true,
          titleSrc: function(item) {
            return item.el.find('figcaption').text() || item.el.attr('title');
          }
        },
        zoom: {
          enabled: true
        },
        // duration: 300
        gallery: {
          enabled: true,
          navigateByImgClick: false,
          tCounter: ''
        },
        disableOn: function() {
          return $(window).width() > 640;
        }
      });
  
    }).call(this);
  }
  // =========================
  new WOW().init();
  // $('.multi-select').select2();
