$(function() {


    // Input file value
		    $('.upload input[type="file"]').change(function() {
		        var uploadfilename = $(this).val();
		        $(this).parent().find('input[type="text"]').attr('value', uploadfilename);
		    });

			


    // Tabs
			$('.tab_select li:first-child, .tab_content:first-of-type').addClass('active');
			$('.tab_select li').on('click', function(){
				$(this).parent().find('li').removeClass('active').each(function(){
					var tabsTarget = $(this).attr('data-tab');
					$(tabsTarget).removeClass('active');
				});
				$(this).addClass('active');
				var tabTarget = $(this).attr('data-tab');
				$(tabTarget).addClass('active');
				return false;
			});




    // Dropdown
			$('*[data-dropdown]').on('click', function(){
				var datatarget = $(this).attr('data-dropdown');
				$(datatarget).toggle();
		        $('html').click(function(){
		        	$(datatarget).hide();
		        });
		        $(datatarget).click(function(e){
		        	e.stopPropagation();
		        });
				return false;
			});
			
     
     
    
    // Tooltip
			$('.tooltip').each(function(){
				var title = $(this).attr('data-tooltip-title');
				$(this).prepend("<i class='tooltip_content'>" + title + "</i>");
				var tooltip_width = $(this).find("> i").outerWidth();
				$(this).find("> i").css("margin-left", "-" + tooltip_width/2 + "px");
			});
			
     
     
    
    // Show/hide input value
			$('input[type="text"], input[type="password"], input[type="email"]').each(function(){
				var valtxt = $(this).attr('value');
				$(this).focus(function() { if ($(this).val() == valtxt) {$(this).val('');} });
				$(this).blur(function() { if ($(this).val() == '') {$(this).val(valtxt);} });
			});
			$("textarea").focus(function() {if (this.value === this.defaultValue) {this.value = '';}}).blur(function() {if (this.value === '') {this.value = this.defaultValue;}});


}); 