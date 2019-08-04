

$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 
});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/

	$('.button-nav').click(function(){
		$(this).toggleClass('active'), 
		$('.main-nav-list').slideToggle(); 
		return false;
	});
	
	/* components */
	
	/*
	
	if($('.styled').length) {
		$('.styled').styler();
	};
	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			margon  : 10,
			padding  : 10
		});
	};

	if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			axis:"x",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	};
	
	*/
	
	/* components */
	

});

AOS.init({
	offset: 200,
	duration: 450,
	easing: "ease-in-quad",
	delay: 100,
  });


$(document).ready(function(){
	var owl = $("#slider-carousel");
	owl.owlCarousel({
		items: 5,
		margin: 10,
		nav: true,
		dots: false,
		pagination:false,
		loop:true,
		autoplay: true,
		autoPlaySpeed: 5000,
		autoPlayTimeout: 5000,
		autoplayHoverPause: true,
		navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
		responsive:{ 

				
			
				320:{
	
					items:2
	
				},

				600:{
	
					items:3
	
				},
	
	
				900:{
	
					items:4
	
				},
	
				1100:{
	
					items:5
	
				}
	
			}
			
	});
});


AOS.init();



$(function(){

	$('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
		var target = $(this).attr('href'),
		bl_top = $(target).offset().top - 70;
		$('body, html').animate({scrollTop: bl_top}, 1000);
		return false
	});

	$('.project-nav__container_items').children().click(function(){

		$('.project-nav__container_items').children().removeClass('active');
		$('.project-nav__container_items').eq(i).children().addClass('active');
	
	})
});


$('.modalbox').click(function(){
	$('.modalbox').children().toggleClass("far fa-envelope");
	$('.modalbox').children().toggleClass("fas fa-times");
	$(".modalDialog").toggleClass("clouse");
});


$(window).scroll(function () {
    var scrollDistance = $(window).scrollTop() + 200;
    $('.section').each(function (i) {
      if ($(this).position().top <= scrollDistance) {
        $('.project-nav__container_items').children().removeClass('active');
        $('.project-nav__container_items').eq(i).children().addClass('active');
      }
    });
});


	

$('.HEAD__burger-menu_icon').click(function () {
	$('.HEAD__nav_menu').toggleClass('active')
	$('.HEAD__burger-menu_icon').toggleClass('active')	
})



$(document).ready(function() {
	
	var header = $(".HEAD__nav"); // Меню
	var scrollPrev = 0 // Предыдущее значение скролла
	
	$(window).scroll(function() {
		var scrolled = $(window).scrollTop(); // Высота скролла в px
		var firstScrollUp = false; // Параметр начала сколла вверх
		var firstScrollDown = false; // Параметр начала сколла вниз
		
		// Если скроллим
		if ( scrolled > 0 ) {
			// Если текущее значение скролла > предыдущего, т.е. скроллим вниз
			if ( scrolled > scrollPrev ) {
				firstScrollUp = false; // Обнуляем параметр начала скролла вверх
				// Если меню видно
				if ( scrolled < header.height() + header.offset().top ) {
					// Если только начали скроллить вниз
					if ( firstScrollDown === false ) {
						var topPosition = header.offset().top; // Фиксируем текущую позицию меню
						header.css({
							"height":"0px",
							"overflow":"hidden"
						});
						firstScrollDown = true;
					}
				// Если меню НЕ видно
				} else {
					// Позиционируем меню фиксированно вне экрана
					header.css({
						"height": "0px",
						"overflow":"hidden"
					});
				}
				
			// Если текущее значение скролла < предыдущего, т.е. скроллим вверх
			} else {
				firstScrollDown = false; // Обнуляем параметр начала скролла вниз
				// Если меню не видно
				if ( scrolled > header.offset().top ) {
					// Если только начали скроллить вверх
					if ( firstScrollUp === false ) {
						var topPosition = header.offset().top; // Фиксируем текущую позицию меню
						header.css({
							"height":"190px",
							"overflow":"visible"
						});
						firstScrollUp = true;
					}
					// Позиционируем меню абсолютно
					header.css({
						"position": "absolute"
					});
				} else {
					// Убираем все стили
					header.removeAttr("style");
				}
			}
			// Присваеваем текущее значение скролла предыдущему
			scrollPrev = scrolled;
		}	
	});			
});



$(window).scroll(function(event){
	var st = $(this).scrollTop();
	var header = $('.HEAD__nav');

	if(window.pageYOffset > 50){
		header.addClass("HEAD-fixed");
	}

	else{
		header.removeClass("HEAD-fixed");
	}
});



jQuery(document).ready(function(){

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '../assets/particles.json', function() {
	console.log('callback - particles.js config loaded');
  });

});





var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();		
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
	
	
	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;
	
	if (viewport_wid <= 991) {
		
	}
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);
