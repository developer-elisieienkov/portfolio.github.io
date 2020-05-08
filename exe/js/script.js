//use strict

$(function () {
  $(window).on("scroll resize", function () {
    var o = $(window).scrollTop() / ($(document).height() - $(window).height());
    $(".progress-bar").css({
      width: ((100 * o) | 0) + "%",
    });
  });
});

var app = new Vue({
  el: "#app",
  data: {
    message: "Load More Works",
  },
  methods: {
    show: function () {
      app.seen = !app.seen;
      app.message = app.seen ? "Hide" : "Load More Works";
    },
  },
});

$(".collapse-card-toggler").click(function () {
  $(".clickbg-1").removeClass("clickbg-1");
  var collapseId = "#collapse-row" + this.id,
    clickClass = "." + this.id;
  $(collapseId).on("show.bs.collapse shown.bs.collapse", function () {
    $(clickClass).addClass("clickbg-1");
  });

  $(collapseId).on("hide.bs.collapse", function () {
    $(clickClass).removeClass("clickbg-1");
  });
});

/*

var anchor = new Vue({
    el: '#anchor',
    data:{

    },
    methods: {
        onTop: function () {
            let topHere = this.$refs['anchorTarget']
            let top = window.scrollY + topHere.getBoundingClientRect().y;
            window.scrollTo(0, top)
        }
    }
})*/

$(function () {
  $("#anchor-link").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 800);
  });
});

//carousels
$(function () {
  $("#sidebar-owl").owlCarousel({
    items: 1,
    loop: false,
    autoplay: false,
    margin: 20,
  });
});
$("#sidebar-owl").on("translated.owl.carousel", function () {
  if ($(".owl-item:last-child").hasClass("active")) {
    $(".carousel-head .item-2").addClass("active");
    $(".carousel-head .item-1").removeClass("active");
  } else {
    $(".carousel-head .item-2").removeClass("active");
    $(".carousel-head .item-1").addClass("active");
  }
});

$(function () {
  $('[id*="owl1"]').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    margin: 20,
    autoplayHoverPause: true,
  });
});

$(function () {
  $("#owl2,#portfolioOwl").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    margin: 30,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 2,
      },
    },
  });
});

$(function () {
  $("#owl3").owlCarousel({
    items: 5,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    nav: true,
    navText: false,
    center: true,
    responsive: {
      1: {
        items: 1,
        nav: false,
      },
      700: {
        items: 3,
      },
      990: {
        items: 5,
      },
    },
  });
});

$(function () {
  $("#portfolioDetails").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    margin: 0,
    autoplayHoverPause: true,
    navText: false,
    responsive: {
      1: {
        nav: false,
      },
      700: {
        nav: true,
      },
    },
  });
});

$(function () {
  $("[id*=owl4],[id*=owl-shop]").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    margin: 0,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    navText: false,
  });
});

//player

$(".elem-with-media").hover(function () {
  var playerParent = "#" + this.id;

  var controls = {
    video: $(playerParent + " .myvideo"),
    playpause: $(playerParent + " .play"),
    total: $(playerParent + " .video-progress-container"),
    progress: $(playerParent + " .video-progress-bar"),
    buffer: $(playerParent + " .video-buffer-bar"),
    showCurrent: $(playerParent + " .current-time"),
    showDuration: $(playerParent + " .duration"),
    dynamic: $(playerParent + " .sound"),
  };

  var video = controls.video[0];

  $(".poster").click(function () {
    $(".video").css({
      "z-index": 99,
      opacity: 1,
    });
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });

  controls.video.click(function () {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
  controls.playpause.click(function () {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
  video.addEventListener("ended", function () {
    video.pause();
    controls.playpause.toggleClass("paused");
  });
  video.addEventListener("play", function () {
    controls.playpause.toggleClass("paused");
  });

  video.addEventListener("pause", function () {
    controls.playpause.toggleClass("paused");
  });
  function plusZero(timeToString) {
    var timeString = String(timeToString);
    while (timeString.length < 2) timeString = "0" + timeString;
    return timeString;
  }
  function videoTime(time) {
    var mm = Math.floor(time / 60);
    var ss = Math.floor(time % 60);
    var processTime = plusZero(mm) + ":" + plusZero(ss);
    return processTime;
  }
  $(video).on("timeupdate", function () {
    var o = video.currentTime / video.duration;

    controls.progress.css({
      width: ((100 * o) | 0) + "%",
    });
    controls.showCurrent.text(videoTime(this.currentTime));
    controls.showDuration.text(videoTime(this.duration));
  });

  $(controls.total).click(function (e) {
    var x = (e.pageX - controls.total.offset().left) / $(this).width();
    video.currentTime = x * video.duration;
  });

  $(video).on("progress", function () {
    var o = video.buffered.end(0) / video.duration;

    controls.buffer.css({
      width: ((100 * o) | 0) + "%",
    });
  });

  controls.dynamic.click(function () {
    video.muted = !video.muted;
    controls.dynamic.toggleClass("off");
  });
});

$(".sidebar-toggler").click(function () {
  $("#sidebar").removeClass("d-none");
  if ($("#sidebar").hasClass("show")) {
    $(".sidebar-toggler").removeClass("open");
  } else {
    $(".sidebar-toggler").addClass("open");
  }
});
/*$('#sidebar').on("hide.bs.collapse",function () {
    $('.sidebar-toggler').removeClass("open");
});*/

$(document).ready(function () {
  if ($(window).width() > 768) {
    $("#sidebar>a").removeAttr("href");
  }
});

$(function () {
  $(window).on("scroll resize", function () {
    if ($(window).scrollTop() >= $(window).height() - 100) {
      $(".nav-bg").addClass("navbar-on-skroll");
    } else {
      $(".nav-bg").removeClass("navbar-on-skroll");
    }
  });
});

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 32.922082, lng: 130.623257 },
    zoom: 16,
    disableDefaultUI: true,
    styles: [
      {
        featureType: "poi.attraction",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi.attraction",
        elementType: "labels",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi.attraction",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "poi.business",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi.business",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi.government",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi.medical",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi.place_of_worship",
        elementType: "labels",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi.place_of_worship",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi.school",
        elementType: "labels",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi.school",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi.sports_complex",
        elementType: "labels",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi.sports_complex",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
    ],
  });
  var marker = new google.maps.Marker({
    position: { lat: 32.922082, lng: 130.623257 },
    map: map,
    title: "We Are Here",
    icon: "./images/contact-us/location.png",
  });
}
$(".like").click(function () {
  $(this).toggleClass("active");
});
$(".to-cart").click(function () {
  $(this).text("View Cart").addClass("active");
});

$(".rating")
  .hover(function () {
    var star = $("#" + this.id + " div");
    star
      .hover(function () {
        var starPosition = $(this).attr("class");
        for (var i = 0; i < 5; i++) {
          if (i < starPosition[0]) {
            star[i].classList.add("selected");
          } else {
            star[i].classList.remove("selected");
          }
        }
      })
      .click(function () {
        var starPosition = $(this).attr("class");
        for (var i = 0; i < 5; i++) {
          if (i < starPosition[0]) {
            star[i].classList.add("rated");
          } else {
            star[i].classList.remove("rated");
          }
        }
      });
  })
  .mouseleave(function () {
    $("#" + this.id + " div").removeClass("selected");
  });

//pricefilter

$("#slider-range").slider({
  range: true,
  min: 0,
  max: 500,
  values: [47, 228],
  slide: function (event, ui) {
    $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
  },
});
$("#amount").val(
  "$" +
    $("#slider-range").slider("values", 0) +
    " - $" +
    $("#slider-range").slider("values", 1)
);
