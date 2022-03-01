(function($) {	
	'use strict';
	//Cache jQuery Selector
	var $window		= $(window),
		$carousel	= $('.carousel'),   			// 2. Bootstrap slider pause time
		$dropdown	= $('.dropdown-toggle'),		// 3. dropdown submenu on hover in desktopand dropdown sub menu on click in mobile
		$header		= $('#header'),					// 4. Update Header Style + Scroll to Top
		$projectimg	= $('.project-images'),			// 5. Single project slider click + Show large image in top box
		$our_team	= $('.our-team-member'),		// 8. Our Team Member Carousel
		$client		= $('.testimonials-carousel'),	// 9. Testimonials Carousel Slider
		$srv_slide	= $('.service-slider'),			// 10. Single service Slider
		$sidebar	= $('.feedback-sidebar'),		// 11. Testimonials Carousel in sidebar small
		$projectnav	= $('.project-thumbnail'),		// 12. Single Project slider carosure nav image slider
		$brand		= $('.partner-slider'),			// 13. Our Partner Logos Slider Auto
		$projects	= $('.projects2'),				// 14. Our Partner Logos Slider Auto
		$contact	= $('#contact-form')			// 22. Contact Form Validation
		
		
	
	
	
		
	/* Table of jQuery settings list
		
		1. Preloader For Hide loader
		2. Bootstrap slider pause time
		3. dropdown submenu on hover in desktopand dropdown sub menu on click in mobile
		4. Update Header Style + Scroll to Top
		5. Single project slider click + Show large image in top box
		6. Submenu Dropdown Toggle
		7. Revolution Slider
		8. Our Team Carousel
		9. Testimonials Carousel Slider Home
		10. Single service Slider
		11. Testimonials Carousel in sidebar small
		12. Project image slider carosure nav image slide
		13. Our Partner Logos Slider Auto
		14. Project thumb slide in home page2
		15. Use for Accordion Box
		16. Fact Counter For Achivement Counting
		17. LightBox / Fancybox
		18. Sortable Masonary with Filters
		19. Gallery With Filters List
		20. Date Picker
		21. Scroll to a Specific Div
		22. Click Search Icon and Open Search Field
		23. Contact Form Validation
		24. Elements Animation
		25. When document is Scrollig, do
		26. When document is loading, do
		27. Youtube and Vimeo video popup control
	
	*/
		
				
	
	// 1. Preloader For Hide loader
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(500).fadeOut(500);
			$('body').removeClass('page-load');
		}
	}
	
	
	
	// Put slider space for nav not in mini screen
	// Autometic count header height and take space body from header
	
	if(document.querySelector('.nav-on-top') !== null) {
		var get_height = jQuery('.nav-on-top').height();
			if(get_height > 0 && $window.width() > 991){
			jQuery('.nav-on-top').next().css('margin-top', get_height);
		}
		$window.on('resize', function(){
			if($window.width() < 991){
				jQuery('.nav-on-top').next().css('padding-top', '0');
			}
			else {
				jQuery('.nav-on-top').next().css('margin-top', get_height);
			}
		});
	 }
	 if(document.querySelector('.nav-on-banner') !== null) {
		var get_height = jQuery('.nav-on-banner').height();
			if(get_height > 0 && $window.width() > 991){
			jQuery('.nav-on-banner').next().css('padding-top', get_height);
		}
		$window.on('resize', function(){
			if($window.width() < 991){
				jQuery('.nav-on-banner').next().css('padding-top', '0');
			}
			else {
				jQuery('.nav-on-banner').next().css('padding-top', get_height);
			}
		});
	}
	
	
	var tpj=jQuery;
	var revapi26;
	tpj(document).ready(function() {
		if(tpj("#rev_slider_26_1").revolution == undefined){
			revslider_showDoubleJqueryError("#rev_slider_26_1");
		}else{
			revapi26 = tpj("#rev_slider_26_1").show().revolution({
				sliderType:"standard",
				jsFileLocation:"revolution/js/",
				sliderLayout:"fullscreen",
				dottedOverlay:"none",
				delay:9000,
				navigation: {
					keyboardNavigation:"off",
					keyboard_direction: "horizontal",
					mouseScrollNavigation:"off",
					mouseScrollReverse:"default",
					onHoverStop:"off",
					touch:{
						touchenabled:"on",
						touchOnDesktop:"off",
						swipe_threshold: 75,
						swipe_min_touches: 1,
						swipe_direction: "horizontal",
						drag_block_vertical: false
					}
					,
					arrows: {
						style:"uranus",
						enable:true,
						hide_onmobile:true,
						hide_under:778,
						hide_onleave:false,
						tmp:'',
						left: {
							h_align:"left",
							v_align:"center",
							h_offset:15,
							v_offset:0
						},
						right: {
							h_align:"right",
							v_align:"center",
							h_offset:15,
							v_offset:0
						}
					}
					,
					bullets: {
						enable:true,
						hide_onmobile:false,
						style:"bullet-bar",
						hide_onleave:false,
						direction:"horizontal",
						h_align:"center",
						v_align:"bottom",
						h_offset:0,
						v_offset:30,
						space:5,
						tmp:''
					}
				},
				responsiveLevels:[1240,1024,778,480],
				visibilityLevels:[1240,1024,778,480],
				gridwidth:[1240,1024,778,480],
				gridheight:[868,768,960,720],
				lazyType:"none",
				parallax: {
					type:"scroll",
					origo:"slidercenter",
					speed:2000,
					levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
				},
				shadow:0,
				spinner:"off",
				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				shuffle:"off",
				autoHeight:"off",
				fullScreenAutoWidth:"off",
				fullScreenAlignForce:"off",
				fullScreenOffsetContainer: "",
				fullScreenOffset: "60px",
				hideThumbsOnMobile:"off",
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				debugMode:false,
				fallbacks: {
					simplifyAll:"off",
					nextSlideOnWindowFocus:"off",
					disableFocusListener:false,
				}
			});
		}
	});	/*ready*/
	
	
	var tpj=jQuery,			
			revapi4;
		tpj(document).ready(function() {
			if(tpj("#rev_slider_4_1").revolution == undefined){
				revslider_showDoubleJqueryError("#rev_slider_4_1");
			}else{
				revapi4 = tpj("#rev_slider_4_1").show().revolution({
					sliderType:"standard",
					jsFileLocation:"revolution/js/",
					sliderLayout:"fullwidth",
					dottedOverlay:"none",
					delay:9000,
					particles: {startSlide: "first", endSlide: "last", zIndex: "1",
						particles: {
							number: {value: 80}, color: {value: "#000000"},
							shape: {
								type: "circle", stroke: {width: 0, color: "#ffffff", opacity: 1},
								image: {src: ""}
							},
							opacity: {value: 0.3, random: false, min: 0.25, anim: {enable: false, speed: 3, opacity_min: 0, sync: false}},
							size: {value: 10, random: true, min: 1, anim: {enable: false, speed: 40, size_min: 1, sync: false}},
							line_linked: {enable: true, distance: 200, color: "#000000", opacity: 0.2, width: 1},
							move: {enable: true, speed: 3, direction: "none", random: true, min_speed: 3, straight: false, out_mode: "out"}},
						interactivity: {
							events: {onhover: {enable: true, mode: "bubble"}, onclick: {enable: false, mode: "repulse"}},
							modes: {grab: {distance: 400, line_linked: {opacity: 0.5}}, bubble: {distance: 400, size: 150, opacity: 1}, repulse: {distance: 200}}
						}
					},
					navigation: {
						keyboardNavigation:"off",
						keyboard_direction: "horizontal",
						mouseScrollNavigation:"off",
						mouseScrollReverse:"default",
						onHoverStop:"off",
						arrows: {
							style:"gyges",
							enable:true,
							hide_onmobile:false,
							hide_onleave:false,
							tmp:'',
							left: {
								h_align:"center",
								v_align:"bottom",
								h_offset:-20,
								v_offset:0
							},
							right: {
								h_align:"center",
								v_align:"bottom",
								h_offset:20,
								v_offset:0
							}
						}
					},
					responsiveLevels:[1240,1024,778,480],
					visibilityLevels:[1240,1024,778,480],
					gridwidth:[1240,1024,778,480],
					gridheight:[820,768,960,720],
					lazyType:"none",
					shadow:0,
					spinner:"off",
					stopLoop:"on",
					stopAfterLoops:0,
					stopAtSlide:1,
					shuffle:"off",
					autoHeight:"off",
					fullScreenAutoWidth:"off",
					fullScreenAlignForce:"off",
					fullScreenOffsetContainer: "",
					fullScreenOffset: "60px",
					disableProgressBar:"on",
					hideThumbsOnMobile:"off",
					hideSliderAtLimit:0,
					hideCaptionAtLimit:0,
					hideAllCaptionAtLilmit:0,
					debugMode:false,
					fallbacks: {
						simplifyAll:"off",
						nextSlideOnWindowFocus:"off",
						disableFocusListener:false,
					}
				});
			}
			
			RsParticlesAddOn(revapi4);
		});	/*ready*/
		
		
		var tpj=jQuery;
			
			var revapi1078;
			tpj(document).ready(function() {
				if(tpj("#rev_slider_1078_1").revolution == undefined){
					revslider_showDoubleJqueryError("#rev_slider_1078_1");
				}else{
					revapi1078 = tpj("#rev_slider_1078_1").show().revolution({
						sliderType:"standard",
jsFileLocation:"revolution/js/",
						sliderLayout:"fullwidth",
						dottedOverlay:"none",
						delay:9000,
						navigation: {
							keyboardNavigation:"off",
							keyboard_direction: "horizontal",
							mouseScrollNavigation:"off",
 							mouseScrollReverse:"default",
							onHoverStop:"off",
							touch:{
								touchenabled:"on",
								swipe_threshold: 75,
								swipe_min_touches: 1,
								swipe_direction: "horizontal",
								drag_block_vertical: false
							}
							,
							arrows: {
								style:"zeus",
								enable:true,
								hide_onmobile:true,
								hide_under:600,
								hide_onleave:true,
								hide_delay:200,
								hide_delay_mobile:1200,
								tmp:'<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
								left: {
									h_align:"left",
									v_align:"center",
									h_offset:30,
									v_offset:0
								},
								right: {
									h_align:"right",
									v_align:"center",
									h_offset:30,
									v_offset:0
								}
							}
							,
							bullets: {
								enable:false,
								hide_onmobile:true,
								hide_under:600,
								style:"metis",
								hide_onleave:true,
								hide_delay:200,
								hide_delay_mobile:1200,
								direction:"horizontal",
								h_align:"center",
								v_align:"bottom",
								h_offset:0,
								v_offset:30,
								space:5,
								tmp:'<span class="tp-bullet-img-wrap">  <span class="tp-bullet-image"></span></span><span class="tp-bullet-title">{{title}}</span>'
							}
						},
						viewPort: {
							enable:true,
							outof:"pause",
							visible_area:"80%",
							presize:false
						},
						responsiveLevels:[1240,1024,778,480],
						visibilityLevels:[1240,1024,778,480],
						gridwidth:[1240,1024,778,480],
						gridheight:[840,700,500,400],
						lazyType:"none",
						parallax: {
							type:"mouse",
							origo:"slidercenter",
							speed:2000,
							levels:[2,3,4,5,6,7,12,16,10,50,47,48,49,50,51,55],
							type:"mouse",
						},
						shadow:0,
						spinner:"off",
						stopLoop:"off",
						stopAfterLoops:-1,
						stopAtSlide:-1,
						shuffle:"off",
						autoHeight:"off",
						hideThumbsOnMobile:"off",
						hideSliderAtLimit:0,
						hideCaptionAtLimit:0,
						hideAllCaptionAtLilmit:0,
						debugMode:false,
						fallbacks: {
							simplifyAll:"off",
							nextSlideOnWindowFocus:"off",
							disableFocusListener:false,
						}
					});
				}
			});	/*ready*/

	
	
	// 3. dropdown submenu on hover in desktopand dropdown sub menu on click in mobile
	
	$('#bs-example-navbar-collapse-1').each(function() {
		$dropdown.on('click', function(){
			if($window.width() < 992){
				if($(this).parent('.dropdown').hasClass('visible')){
					$(this).parent('.dropdown').children('.dropdown-menu').first().stop(true, true).slideUp(300);
					$(this).parent('.dropdown').removeClass('visible');
				}
				else{
					$(this).parent('.dropdown').children('.dropdown-menu').stop(true, true).slideDown(300);
					$(this).parent('.dropdown').addClass('visible');
				}
			}
		});
		
		$window.on('resize', function(){
			if($window.width() > 991){
				$('.dropdown-menu').removeAttr('style');
				$('.dropdown ').removeClass('visible');
			}
		});
		
	});
	
	
	
	// 4. Update Header Style + Scroll to Top
	function headerStyle() {
		if($header.length){
			var windowpos = $window.scrollTop();
			if (windowpos >= 180) {
				$header.addClass('fixed-header');
			} else {
				$header.removeClass('fixed-header');
			}
		}
	}
	
	
	// 5. Single project slider click + Show large image in top box
	$projectimg.each(function() {
		$(this).on('click','.item a',function(event) {
			event.preventDefault();
			$(this).parents('.project-images').find(".item a").removeClass('onlive');
			$(this).addClass('onlive');
			$(this).parents('.project-images').find(".slide-project img").attr("src", $(this).attr("href"));
		});
	});
	
	// 6. Submenu Dropdown Toggle
	if($('.main-menu li.dropdown ul').length){
		$('.main-menu li.dropdown').append('<div class="dropdown-btn"></div>');
		
		//Dropdown Button
		$('.main-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		
	}
	
	// 7. Auto active class adding with main-header
	$window.on('load', function(){
		var current = location.pathname;
		var $path = current.substring(current.lastIndexOf('/') + 1);
		$('.navbar-nav li a').each(function(e){
			var $this = $(this);
			// if the current path is like this link, make it active
			if($path == $this.attr('href')){
				$this.parent('li').addClass('active');
			}
			else if($path == ''){
				$('.navbar-nav li.first').addClass('active');
			}
		})
	})
	
	// 26. Gallery With Filters List
	//Gallery With Filters List
	if($('.filter-list').length){
		$('.filter-list').mixItUp({});
	}
	
	// 8. Our Team Carousel
	if ($our_team.length) {
		$our_team.owlCarousel({
			loop:true,
			margin:30,
			nav:false,
			dots: true,
			autoplayHoverPause:false,
			slideBy: 3,
			smartSpeed: 300,
			autoplay: false,
			navText: [ '<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>' ],
			responsive:{
				0:{
					items:1
				},
				768:{
					items:2
				},
				1024:{
					items:3
				},
				1200:{
					items:3
				}
			}
		});    		
	}
	
	
	// 9. Testimonials Carousel Slider Home
	if ($client.length) {
		$client.owlCarousel({
			loop:true,
			margin:30,
			nav:false,
			dots: true,
			autoplayHoverPause:false,
			autoplay: true,
			smartSpeed: 700,
			navText: [ '<i class="flaticon-left-arrow"></i>', '<i class="flaticon-arrows"></i>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				760:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}
	
	
	// 10. Single Project Slider
	if ($srv_slide.length) {
		$srv_slide.owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			dots: false,
			autoplayHoverPause:false,
			autoplay: true,
			smartSpeed: 700,
			navText: [ '<i class="flaticon-left-arrow"></i>', '<i class="flaticon-arrows"></i>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				760:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}
	
	
	// 11. Testimonials Carousel in sidebar small
	if ($sidebar.length) {
		$sidebar.owlCarousel({
			loop:true,
			margin:30,
			nav:false,
			autoplayHoverPause:true,
			autoplay: true,
			smartSpeed: 700,
			navText: [ '<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				760:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}
	
	
	// 12. Single Project slider carosure nav image slider
	if ($projectnav.length) {
		$projectnav.owlCarousel({
			loop:false,
			margin:20,
			nav:false,
			dots:false,
			autoplayHoverPause:false,
			autoplay: true,
			smartSpeed: 400,
			navText: [ '<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>' ],
			responsive:{
				0:{
					items:3
				},
				600:{
					items:4
				},
				760:{
					items:5
				},
				1024:{
					items:5
				},
				1100:{
					items:6
				}
			}
		});    		
	}
	
	
	// 13. Our Partner Logos Slider Auto
	if ($brand.length) {
		$brand.owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			dots: false,
			smartSpeed: 500,
			navText: [ '<i class="flaticon-left-arrow"></i>', '<i class="flaticon-arrows"></i>' ],
			autoplay: 4000,
			responsive:{
				0:{
					items:1
				},
				480:{
					items:2
				},
				600:{
					items:3
				},
				800:{
					items:4
				},
				1200:{
					items:4
				}
			}
		});    		
	}
	
	// 14. Project thumb slide in home page2
	if ($projects.length) {
		$projects.owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			dots: false,
			smartSpeed: 500,
			navText: [ '<i class="flaticon-left-arrow"></i>', '<i class="flaticon-arrows"></i>' ],
			autoplay: false,
			responsive:{
				0:{
					items:1
				},
				480:{
					items:2
				},
				600:{
					items:2
				},
				800:{
					items:2
				},
				1100:{
					items:3
				}
			}
		});    		
	}
	
	
	// 15. Use for Accordion Box
	if($('.according-area').length){
		$('.according-title').on('click', function() {
			
		
			if($(this).hasClass('active')){
				$(this).addClass('active');			
			}
			
			//if ($(this).next('.according_details').is(':visible')){
//				$(this).removeClass('active');
//			}
			else{
				$('.according-title').removeClass('active');
				$('.according-details').slideUp(300);
				$(this).addClass('active');
				$(this).next('.according-details').slideDown(300);	
			}
		});	
	}
	
	
	
	// 16. Fact Counter For Achivement Counting
	//Fact Counter For Achivement Counting
	function factCounter() {
		if($('.fact-counter').length){
			$('.fact-counter .achievement.animated').each(function() {
				var $t = $(this),
					n = $t.find(".counting").attr("data-stop"),
					r = parseInt($t.find(".counting").attr("data-speed"), 10);
					
				if (!$t.hasClass("counted")) {
					$t.addClass("counted");
					$({
						countNum: $t.find(".count-text").text()
					}).animate({
						countNum: n
					}, {
						duration: r,
						easing: "linear",
						step: function() {
							$t.find(".counting").text(Math.floor(this.countNum));
						},
						complete: function() {
							$t.find(".counting").text(this.countNum);
						}
					});
				}
				//set skill building height
					var size = $(this).children('.progress-bar').attr('aria-valuenow');
					$(this).children('.progress-bar').css('width', size+'%');
			});
		}
	}
	
	
	// 17. LightBox / Fancybox
	if($('.photo_gallery a').length) {
		$('.photo_gallery a').fancybox({
			openEffect  : 'elastic',
			closeEffect : 'elastic',
			helpers : {
				media : {}
			}
		});
	}
	

	// 18. Sortable Masonary with Filters
	function enableMasonry() {
		if($('.sortable-masonry').length){
	
			var winDow = $(window);
			// Needed variables
			var $container=$('.sortable-masonry .items-container');
			var $filter=$('.sortable-masonry .filter-btns');
	
			$container.isotope({
				filter:'*',
				 masonry: {
					columnWidth : 1 
				 },
				animationOptions:{
					duration:1000,
					easing:'linear'
				}
			});
			
	
			// Isotope Filter 
			$filter.find('li').on('click', function(){
				var selector = $(this).attr('data-filter');
	
				try {
					$container.isotope({ 
						filter	: selector,
						animationOptions: {
							duration: 1000,
							easing	: 'linear',
							queue	: false
						}
					});
				} catch(err) {
	
				}
				return false;
			});
	
	
			winDow.bind('resize', function(){
				var selector = $filter.find('li.active').attr('data-filter');

				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 1000,
						easing	: 'linear',
						queue	: false
					}
				});
			});
	
	
			var filterItemA	= $('.sortable-masonry .filter-btns li');
	
			filterItemA.on('click', function(){
				var $this = $(this);
				if ( !$this.hasClass('active')) {
					filterItemA.removeClass('active');
					$this.addClass('active');
				}
			});
		}
	}
	
	enableMasonry();
	
	
	
	// 19. Date Picker
	  if($('.datepicker').length){
		$( ".datepicker" ).datepicker();
	  }
	
	
	// 20. Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var HeaderHeight = $('.header-lower').height();
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top - HeaderHeight
			 }, 1000);
	
		});
	}
	
	// 16. Range Slider
	$(document).ready(function(){
		var rangeSlider = function(){
		  var slider = $('.range-slider'),
			  range = $('.range-slider__range'),
			  value = $('.range-slider__value');
			
		  slider.each(function(){

			value.each(function(){
			  var value = $(this).prev().attr('value');
			  $(this).html(value);
			});

			range.on('input', function(){
			  $(this).next(value).html(this.value);
			});
		  });
		};

		rangeSlider();

	});
	
	
	// 21. Click Search Icon and Open Search Field	
	var $srcicon = $('.search-icon'),
		$srcfield = $('.search-from-menu');
		$srcicon.on('click', function(event){
		event.preventDefault();
		$srcfield.addClass('active');
		event.stopPropagation();
	});
	
	$('.src-close').on('click', function(){
		$srcfield.removeClass('active');
	});
	
	$srcfield.on('click', function(event){
		event.stopPropagation();
	});
	
	$window.on('click', function(e){
		$srcfield.removeClass('active');
	});
	
	
	// 22. Contact Form Validation
	if($contact.length){
		$contact.validate({  //#contact-form contact form id
			rules: {
				name: {
					required: true    // Field name here
				},
				email: {
					required: true, // Field name here
					email: true
				},
				subject: {
					required: true
				},
				message: {
					required: true
				}
			},
			
			messages: {
                name: "Please enter your Name", //Write here your error message that you want to show in contact form
                email: "Please enter valid Email", //Write here your error message that you want to show in contact form
                subject: "Please enter your Subject", //Write here your error message that you want to show in contact form
				message: "Please write your Message" //Write here your error message that you want to show in contact form
            },

            submitHandler: function (form) {
                $('#send').attr({'disabled' : 'true', 'value' : 'Sending...' });
                $.ajax({
                    type: "POST",
                    url: "email.php",
                    data: $(form).serialize(),
                    success: function () {
                        $('#send').removeAttr('disabled').attr('value', 'Send');
                        $( "#success").slideDown( "slow" );
                        setTimeout(function() {
                        $( "#success").slideUp( "slow" );
                        }, 5000);
                        form.reset();
                    },
                    error: function() {
                        $('#send').removeAttr('disabled').attr('value', 'Send');
                        $( "#error").slideDown( "slow" );
                        setTimeout(function() {
                        $( "#error").slideUp( "slow" );
                        }, 5000);
                    }
                });
                return false; // required to block normal submit since you used ajax
            }

		});
	} 

	
	
	// 23. Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}

   // 24. When document is Scrollig, do
	
	$window.on('scroll', function() {
		headerStyle();
		factCounter();
	});
	

   // 25. When document is loading, do
	
	$window.on('load', function() {
		handlePreloader();
		enableMasonry();
	});
	
	
	// 27. Youtube and Vimeo video popup control
	jQuery(function(){
		jQuery("a.video-popup").YouTubePopUp();
		//jQuery("a.video-popup").YouTubePopUp( { autoplay: 0 } ); // Disable autoplay
	});
	

	// 29. sideber nav toogle	
	$('.sideber_dropdown').on('click', function() {
		$(this).toggleClass('active');
		$(this).next('.sub_category').slideToggle(500);
		
	});
		
		
	// 30. sideber range	
	$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  } );
  
  

})(jQuery);