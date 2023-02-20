$(function() {


    // Data slide
			$('*[data-slide]').on('click', function(){
				var slideTarget = $(this).attr('data-slide');
			    $('html, body').animate({
			        scrollTop: $(slideTarget).offset().top - 10
			    }, 1000);
				return false;
			});




    // Data trigger
			$('*[data-trigger]').on('click', function(){
				var slideTrigger = $(this).attr('data-trigger');
			    $(slideTrigger).addClass('active');
			    $('html').addClass('active');
				return false;
			});
			$('.form_wrap .close').on('click', function(){
			    $(this).parent().removeClass('active');
                $('html').removeClass('active');
			});




    // Feedback Slider
            $('.slider').slick({
              adaptiveHeight: true,
              fade: true,
              cssEase: 'linear'
            });


}); 