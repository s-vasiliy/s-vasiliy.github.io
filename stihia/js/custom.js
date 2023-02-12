$(function() {


    // Data slide
			$('*[data-slide]').on('click', function(){
				var slideTarget = $(this).attr('data-slide');
			    $('html, body').animate({
			        scrollTop: $(slideTarget).offset().top - 10
			    }, 1000);
				return false;
			});




    // Feedback Slider
            $('.slider').slick({
              adaptiveHeight: true,
              fade: true,
              cssEase: 'linear'
            });


}); 