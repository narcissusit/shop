$(document).ready(function(){
	$('.menu_icon').click(function(){
		$(this).toggleClass('open');
		$('.main_menu').toggleClass('show');
		$('.user_menu').toggleClass('show');
		$('.social_networks').toggleClass('show');
		$('body').toggleClass('scroll');
	});
	$('.main_menu').click(function(){
		$('.menu_icon').toggleClass('open');
		$(this).toggleClass('show');
		$('.user_menu').toggleClass('show');
		$('.social_networks').toggleClass('show');
		$('body').toggleClass('scroll');
	});

	$('#login').click(function (event) {
		event.preventDefault();
	$('.modal_form').fadeIn();
	$('body').toggleClass('scroll');
	});

	$('.sign_in').submit(function(){
	$('.modal_form').fadeOut();
	$('body').toggleClass('scroll');
	return false;
	});

	var modal = document.getElementById('modal');

	window.onclick = function(event) {
	    if (event.target == modal) {
	    	$('.modal_form').fadeOut();
	    	$('body').toggleClass('scroll');
	    }
	}
});

	var slideIndex=1;
	showSlides(slideIndex);

	function plusSlides(n){
		showSlides(slideIndex += n);
	}

	function currentSlide(n){
		showSlides(slideIndex = n);
	}

	function showSlides(n){
		var i;
		var slides = document.getElementsByClassName("slide");
		var dots = document.getElementsByClassName("dot");

		if(n > slides.length){
			slideIndex = 1;
		}
		if(n < 1){
			slideIndex = slides.length;
		}
		for(i=0; i<slides.length; i++){
			slides[i].style.display = "none";
		}
		for(i=0; i < dots.length; i++){
			dots[i].className = dots[i].className.replace("active","");
		}
		 slides[slideIndex-1].style.display = "block";
		 dots[slideIndex-1].className+= " active";
	}

$(function(){
    $(".to_top").bind('click', function(e){
        e.preventDefault();
        $('body,html').animate({scrollTop: 0}, 400);    
    });
});