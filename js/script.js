$(document).ready(function () {
  $('.jquery-background-video').bgVideo({fadeIn: 2000});

var navbar = document.getElementsByTagName("nav");
var sticky = navbar[0].offsetHeight ;


// make nav bar static on scroll 
window.addEventListener("scroll" , function(){
    if (this.document.documentElement.scrollTop >= sticky) {
        // $(navbar).css("position", "fixed");
        $(navbar).css("background" , "#fff");
    } else {
        // $(navbar).removeClass("bg-main-color")
        $(navbar).css("background" , "transparent");
        // $(navbar).css("position", "sticky");
    }
})

  //loader
  setTimeout(function () {
    $(".loader").fadeOut(1000);
  }, 2000);

  $(".rev-client .owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    rtl: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });
  $('.partners .owl-carousel').owlCarousel({
    center: true,
    loop: true,
    nav: false,
    rtl: true,
    margin: 50,
    responsive: {
      0: {
        items: 3,
      },
      1000: {
        items: 4,
      },
      1200: {
        items: 5,
      }
    },
  });

  // search sub menu
  $(".top-nav-search .open-search").click(function (event) {
    event.stopPropagation();
    $(".top-nav-search form").toggleClass("show");
    $(".top-nav-search input").focus();
  });

  $("body").click(function (e) {
    let input = document.querySelector(".top-nav-search input");
    if (e.target === input) {
      $(".top-nav-search form").addClass("show");
      $(".top-nav-search input").focus();
    } else {
      $(".top-nav-search form").removeClass("show");
    }
  });

  $(function () {
    for (let i = 1; i <= 5; i++) {
      $(".user-rate" + i).rateYo({
        rating: i,
        starWidth: "20px",
        readOnly: true,
        rtl: true,
      });
    }

    $("#your-rate").rateYo({
      starWidth: "15px",
      ratedFill: "#FFC107",
      rating: 0,
      fullStar: true,
    });
  });
  $(".blog .card").hover(function () {
    $(this).find(".card-comm").stop().animate(
      {
        height: "toggle",
        opacity: "toggle",
      },
      100
    );
  });

  $('select').niceSelect();

});
