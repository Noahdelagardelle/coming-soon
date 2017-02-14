$(document).ready(function() {
/*
	$('.about-me-btn').on('tap', function(){
		$('.about-me-modal').addClass('modal-open');
	})

	$('.close-modal-btn').on('tap', function(){
		$('.about-me-modal').removeClass('modal-open');
	})
*/

	$('.about-me-btn').on('tap', function(e){
		e.preventDefault()
		$('.about-me-modal').toggleClass('modal-open');
		$(this).toggleClass('close-btn')
	})

	//$('.close-modal-btn').on('tap', function(){
	//	$('.about-me-modal').removeClass('modal-open');
	//})

});
