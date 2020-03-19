	//nav
	$('.navbar-toggler').click(function () {
		$('.mynavbarstyle').addClass('clickbg');
});

	$('#navbarNav').on('hidden.bs.collapse', function () {
  $('.mynavbarstyle').removeClass('clickbg');
});
	

	$('.navbar-toggler').click(function () {
		$('.logowaxom').addClass('clicklogo');
});
	$('#navbarNav').on('hidden.bs.collapse', function () {
  $('.logowaxom').removeClass('clicklogo');
});


	$('.navbar-toggler').click(function () {
		$('.navbar-nav').addClass('navbar-mobile');

		});


		//loadmore button

	$('#loadmore').click(function () {
		$(this).text('HIDE');
});
	$('#hidebar').on('hidden.bs.collapse', function () {
  $('#loadmore').text('LOAD MORE');
});

		
     
      
   

		
