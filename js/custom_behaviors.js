$(document).ready(function() {

	animate()

	$('.about-me-btn').on('tap', function(e){
		e.preventDefault()
		$('.about-me-modal').toggleClass('modal-open');
		$(this).toggleClass('close-btn')
		modalAnimate()
	})

	function animate() {
		$('.intro').addClass('animated fadeInUp');
		setTimeout(function(){
		  $('.body').addClass('animated fadeInUp');
		}, 600);
		setTimeout(function(){
			$('.email-label, .input-container').addClass('animated fadeInUp');
		}, 900);
		setTimeout(function(){
			$('.social-container a:nth-child(1)').addClass('animated fadeInUp');
		}, 1200);
		setTimeout(function(){
			$('.social-container a:nth-child(2)').addClass('animated fadeInUp');
		}, 1250);
		setTimeout(function(){
			$('.social-container a:nth-child(3)').addClass('animated fadeInUp');
		}, 1300);
		setTimeout(function(){
			$('.social-container a:nth-child(4)').addClass('animated fadeInUp');
		}, 1350);
		setTimeout(function(){
			$('.social-container a:nth-child(5)').addClass('animated fadeInUp');
		}, 1400);
		setTimeout(function(){
			$('.social-container a:nth-child(6)').addClass('animated fadeInUp');
		}, 1450);
	};

	function modalAnimate() {
		setTimeout(function(){
			$('.aside-container h2').toggleClass('animated fadeInRight');
		}, 100);
		setTimeout(function(){
			$('.aside-container p:nth-child(2)').toggleClass('animated fadeInRight');
		}, 150);
		setTimeout(function(){
			$('.aside-container p:nth-child(3)').toggleClass('animated fadeInRight');
		}, 200);
		setTimeout(function(){
			$('.aside-container p:nth-child(4)').toggleClass('animated fadeInRight');
		}, 210);
	};

});
