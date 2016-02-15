$(function() {

    // Tabs
			$('.tab_content').hide();
			$('.tab_select + .tab_content').show();
			$('.tab_select li:first-child').addClass('active');
			$('.tab_select li a').click(function(){
				$(this).parent().parent().find('li').removeClass('active');
				$(this).parent().addClass('active');
				var currentTab = $(this).attr('href');
				$(this).parent().parent().parent().find('.tab_content').hide();
				$(currentTab).show();
				return false;
			});




    // Dropdown
			$('*[data-dropdown]').click(function(){
				var datatarget = $(this).attr('data-dropdown');
				$(datatarget).toggle();
		        $('html').click(function(){
		        	$(datatarget).hide();
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



			
	// Toggle checkbox (old ie fix)
			$('input[type="checkbox"]:checked + label').addClass('checked');
			$('input[type="checkbox"] + label').on('click', function(){
				$(this).toggleClass('checked');
			});

}); 