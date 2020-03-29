$(document).ready(function(){
    $('#owl1').owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        margin:20,
        autoplayHoverPause:true,
    });
});

$(document).ready(function(){
    $('#owl2').owlCarousel({
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

$(document).ready(function(){
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

        let collapseId = "#collapse-row" + this.id,
            clickClass = "." + this.id,
            clickId = "#" + this.id;

        $(clickId).click(function ()
    {
        $(clickClass).addClass('clickbg-1');
    });

    $(collapseId).on('hide.bs.collapse', function ()
    {
        $(clickClass).removeClass('clickbg-1');
    });
});