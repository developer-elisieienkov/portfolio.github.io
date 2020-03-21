






$(function() {
       $(window).on("scroll resize", function() {
           var o = $(window).scrollTop() / ($(document).height() - $(window).height());
           $(".progress-bar").css({
               "width": (100 * o | 0) + "%"
           });
           $('progress')[0].value = o;
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