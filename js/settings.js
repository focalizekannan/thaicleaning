(function($){
	'use strict';
	
	$('.color-panel').each(function(){
		$('.on-panel').on('click', function(){
			$('.color-panel').toggleClass('open');
		});
		
		$('.color-box li').on('click', function(){
			$('.color-box li').removeClass('active');
			$(this).addClass('active');
			 var path = $(this).data('path');
			 var logo1 = $(this).data('image');
			 var logo2 = $(this).data('target');
			 $('#color-change').attr('href', path);
			 $('.nav-logo').attr('src', logo1);
			 $('.logo-bottom').attr('src', logo2);
		});	
		
		// Template color change
		$(".color-box li").each( function() {		
			if ($.cookie('uwash-color') && $.cookie('uwash-color') == $(this).attr('class')) {
				$(this).addClass('active');
				var path = $(this).data('path');
				var logo1 = $(this).data('image');
				var logo2 = $(this).data('target');
				$('#color-change').attr('href', path);
				$('.nav-logo').attr('src', logo1);
				$('.logo-bottom').attr('src', logo2);
			}
		});
		
		$(".color-box li").on('click',function() {
			var file_name = $(this).attr('data-name');
			$.cookie('uwash-color', file_name, { path: '/', expires: 365 });
		});
		
		// Layout select with slide button
		$("#layout-type").each( function() {
			var name = $(this).attr('name');
			if ($.cookie(name) && $.cookie(name) == "boxLayout") {
				$(this).prop('checked', true);
				$('#wrapper').addClass('box-layout');
			}
		});
		
		$("#layout-type").change(function() {
			var name = $(this).attr('name');
			if($(this).prop('checked')){
				$.cookie(name, 'boxLayout', { path: '/', expires: 365 });
			}
			else {
				$.cookie(name, '', { path: '/', expires: 365 });
			}
		});
		
		$('#layout-type').on('click', function(){	
			if($(this).is(':checked')){
				$('#wrapper').addClass('box-layout');
				location.reload();
			}
			else {
				$('#wrapper').removeClass('box-layout');
				location.reload();
			}
		});
		
		
		// Background select with check
		$(".box-bg-style li input[type='radio']").on('click', function(){
			$('body').removeAttr('class');
			if($(this).is(':checked')){
				var class_nm = $(this).attr('value');
				$('body').addClass(class_nm);
			}
			var name = $("#bg-over").attr('name');
			if ($.cookie(name) && $.cookie(name) == "true") {
				$(this).prop('checked', $.cookie(name));
				$('body').addClass('body-overlay');
			}
		});
		
		$(".box-bg-style li input[type='radio']").each( function() {		
			if ($.cookie('bg-layout') && $.cookie('bg-layout') == $(this).attr('value')) {
				$(this).prop('checked', true);
				$('body').addClass($.cookie('bg-layout'));
			}
		});
		
		$(".box-bg-style li input[type='radio']").change(function() {
			var name = $(this).attr('value');
			if($(this).prop('checked')){
				$.cookie('bg-layout', name, { path: '/', expires: 365 });
			}
		});
		
		// Background Overly settinhs
		$("#bg-over").each( function() {
			var name = $(this).attr('name');
			if ($.cookie(name) && $.cookie(name) == "true") {
				$(this).prop('checked', $.cookie(name));
				$('body').addClass('body-overlay');
			}
		});
		
		$("#bg-over").change(function() {
			var name = $(this).attr('name');
			$.cookie(name, $(this).prop('checked'), { path: '/', expires: 365 });
		});
		
		$('#bg-over').on('click', function(){	
			if($(this).is(':checked')){
				$('body').addClass('body-overlay');
			}
			else {
				$('body').removeClass('body-overlay');
			}
		});
		
	});
	
})(jQuery);


