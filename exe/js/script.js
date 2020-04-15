//use strict

$(function() {
       $(window).on("scroll resize", function() {
           var o = $(window).scrollTop() / ($(document).height() - $(window).height());
           $(".progress-bar").css({
               "width": (100 * o | 0) + "%"
           });
       })
   });

var app = new Vue({
    el: '#app',
    data: {
        message: 'Load More Works'
    },
    methods: {
        show: function() {
            app.seen = !app.seen;
            app.message = app.seen ? 'Hide' : 'Load More Works';
        }

    }
})

$('.collapse-card-toggler').click(function()
{

        var collapseId = "#collapse-row" + this.id,
            clickClass = "." + this.id,
            clickId = "#" + this.id;

    $(collapseId).on('show.bs.collapse', function ()
    {
        $(clickClass).addClass('clickbg-1');
    });


    $(collapseId).on('hide.bs.collapse', function ()
    {
        $(clickClass).removeClass('clickbg-1');
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

$(function(){
    $("#anchor-link").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });
});


//carousels

$(function(){
    $('#owl1').owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        margin:20,
        autoplayHoverPause:true,
    });
});

$(function(){

    $('#owl2,#portfolioOwl').owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        margin:30,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 2
            },

        }
    });
});

$(function(){
    $('#owl3').owlCarousel({
        items:5,
        loop:true,
        autoplay:true,
        autoplayHoverPause:true,
        nav:true,
        navText:false,
        center:true,
        responsive: {
            1: {
                items: 1,
                nav: false,
            },
            700: {
                items: 3
            },
            990:{
                items: 5
            },
        }
    });
});

$(function(){
    $('#portfolioDetails').owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        margin:0,
        autoplayHoverPause:true,
        navText:false,
        responsive:{
            1:{
                nav:false,
            },
            700:{
                nav:true
            }
        }
    });
});
$(function(){
    $('#owl4').owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        margin:0,
        autoplayHoverPause:true,
        dots:false,
        nav:true,
        navText:false,
    });
});
//player


$(".elem-with-media").hover(function(){

    var playerParent = "#"+this.id;

    var controls = {
        video: $(playerParent + " .myvideo"),
        playpause: $(playerParent +" .play"),
        total:$(playerParent +" .video-progress-container"),
        progress: $(playerParent +" .video-progress-bar"),
        buffer: $(playerParent +" .video-buffer-bar"),
        showCurrent: $(playerParent +" .current-time"),
        showDuration: $(playerParent +" .duration"),
        dynamic: $(playerParent +" .sound")
    };

    var video = controls.video[0];

    $(".poster").click(function () {
        $(".video").css({
            "z-index": 99,
            "opacity": 1
        });
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }

    });

    controls.video.click(function(){
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
    controls.playpause.click(function(){
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
    video.addEventListener("ended", function() {
        video.pause();
        controls.playpause.toggleClass("paused");
    });
    video.addEventListener("play", function() {
        controls.playpause.toggleClass("paused");
    });

    video.addEventListener("pause", function() {
        controls.playpause.toggleClass("paused");
    });
    function videoTime(time) {
        var mm = Math.floor((time / 60));
        var ss = Math.floor((time % 60));
        var processTime = mm + ":" + ss;
        return processTime;
    };
    $(video).on("timeupdate", function() {
        var o = video.currentTime / video.duration;

        controls.progress.css({
            "width": (100 * o | 0) + "%"
        });
        controls.showCurrent.text(videoTime(this.currentTime));
    });
    $(video).on("canplay", function() {
        controls.showDuration.text(videoTime(this.duration));
    });
    $(controls.total).click(function (e) {
        var x = (e.pageX-controls.total.offset().left)/$(this).width();
        video.currentTime = x * video.duration;

    });

    $(video).on("progress", function() {
        var o = video.buffered.end(0)/ video.duration;

        controls.buffer.css({
            "width": (100 * o | 0) + "%"
        });
    });

    controls.dynamic.click(function() {
        video.muted = !video.muted;
        controls.dynamic.toggleClass("off")
    });
});

