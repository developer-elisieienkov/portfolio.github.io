$(function() {
       $(window).on("scroll resize", function() {
           var o = $(window).scrollTop() / ($(document).height() - $(window).height());
           $(".progress-bar").css({
               "width": (100 * o | 0) + "%"
           });
           $('progress')[0].value = o;
       })
   });


$('.nav-link').mouseover(function()
	{       
		     let mouseoverclass = "." + this.id;
		     let mouseoverid = "#" + this.id;
		 $(function(){
		     $('.test').text(mouseoverclass);
			});
			
			$(mouseoverid).mouseover(function()
				{       
		   			$(mouseoverclass).animate({width: "100%"},1);
				});
		
			$(mouseoverid).mouseout(function()
				{       
	    			$(mouseoverclass).animate({width: "0%"},1);
	});
});