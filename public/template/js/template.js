(function($){
	$(document).ready(function(){
		
		$(window).load(function() {
			$("body").removeClass("preload");
		});

		//Show dropdown on hover only for desktop devices
		//-----------------------------------------------
		var delay=190, setTimeoutConst;
		if (Modernizr.mq('only all and (min-width: 768px)') && !Modernizr.touch) {
			$('.navbar-main-menu>li.dropdown, .navbar-main-menu li.dropdown>ul>li.dropdown').hover(
			function(){
				var $this = $(this);
				setTimeoutConst = setTimeout(function(){
					$this.addClass('open').slideDown();
					$this.find('.dropdown-toggle').addClass('disabled');
				}, delay);

			},	function(){ 
				clearTimeout(setTimeoutConst );
				$(this).removeClass('open');
				$(this).find('.dropdown-toggle').removeClass('disabled');
			});
		};

		//Show dropdown on click only for mobile devices
		//-----------------------------------------------
		if (Modernizr.mq('only all and (max-width: 767px)') || Modernizr.touch) {
			$('.navbar-main-menu [data-toggle=dropdown]').on('click', function(event) {
			// Avoid following the href location when clicking
			event.preventDefault(); 
			// Avoid having the menu to close when clicking
			event.stopPropagation(); 
			// close all the siblings
			$(this).parent().siblings().removeClass('open');
			// close all the submenus of siblings
			$(this).parent().siblings().find('[data-toggle=dropdown]').parent().removeClass('open');
			// opening the one you clicked on
			$(this).parent().toggleClass('open');
			});
		};

		//Main slider
		//-----------------------------------------------
		if ($(".slideshow .flexslider").length>0) {
			if (!Modernizr.touch) {
				$(window).load(function() {
					$('.slideshow .flexslider').flexslider({
						prevText: "",
						nextText: "",
						useCSS: false,
						animation: "fade",
						touch: false,
						start: function(slider){
							slider.removeClass("loading");
							if (Modernizr.csstransitions) {
								setTimeout(function() {
									captionAnimation = $(".slideshow .flex-active-slide .caption").attr("data-caption-effect");
									$('.slideshow .caption').addClass(" animated object-visible " + captionAnimation);
								}, 100);
							};
						},
						before: function(slider){
							if (Modernizr.csstransitions) {
								setTimeout(function() {
									$('.slideshow .caption').removeClass(" animated object-visible " + captionAnimation);
								}, 100);
							};
						},
						after: function(slider){
							if (Modernizr.csstransitions) {
								setTimeout(function() {
									captionAnimation = $(".slideshow .flex-active-slide .caption").attr("data-caption-effect");
									$('.slideshow .caption').addClass(" animated object-visible " + captionAnimation);
								}, 100);
							};
						}
					});
				});
			} else {
				$(window).load(function() {
					$('.slideshow .flexslider').flexslider({
						prevText: "",
						nextText: "",
						useCSS: false,
						animation: "fade",
						start: function(slider){
							slider.removeClass("loading");
							if (Modernizr.csstransitions) {
								setTimeout(function() {
									captionAnimation = $(".slideshow .flex-active-slide .caption").attr("data-caption-effect");
									$('.slideshow .caption').addClass(" animated object-visible " + captionAnimation);
								}, 100);
							};
						},
						before: function(slider){
							if (Modernizr.csstransitions) {
								setTimeout(function() {
									$('.slideshow .caption').removeClass(" animated object-visible " + captionAnimation);
								}, 100);
							};
						},
						after: function(slider){
							if (Modernizr.csstransitions) {
								setTimeout(function() {
									captionAnimation = $(".slideshow .flex-active-slide .caption").attr("data-caption-effect");
									$('.slideshow .caption').addClass(" animated object-visible " + captionAnimation);
								}, 100);
							};
						}
					});
				});
			}

			//Full width Slider
			//-----------------------------------------------

			if ($("[data-slider-height]").length>0) {
				var initialHeight = $(".fullwidth .flexslider").attr("data-slider-height");
			} else {
				var initialHeight = "540";
			}
			var initialWidth = "1140",
			ratio = initialHeight/initialWidth,
			windowsize = $(window).width();
			if ($(window).width() < 1140) {
				$('.slideshow.fullwidth').css("height", windowsize*ratio );
				$('.slideshow.fullwidth .flexslider').css("height", windowsize*ratio );
				$('.slideshow.fullwidth .flexslider .slides>li').css("height", windowsize*ratio );
				$('.slideshow.fullwidth .flexslider .caption-wrapper').css("height", windowsize*ratio );
			} else {
				$('.slideshow.fullwidth').css("height", initialHeight );
				$('.slideshow.fullwidth .flexslider').css("height", initialHeight );
				$('.slideshow.fullwidth .flexslider .slides>li').css("height", initialHeight );
				$('.slideshow.fullwidth .flexslider .caption-wrapper').css("height", initialHeight );
			}

			$(window).resize(function() { 
				if ($("[data-slider-height]").length>0) {
					var initialHeight = $(".fullwidth .flexslider").attr("data-slider-height");
				} else {
					var initialHeight = "540";
				}
				var initialWidth = "1140",
				ratio = initialHeight/initialWidth,
				windowsize = $(window).width();
				if ($(window).width() < 1140) {
					$('.slideshow.fullwidth').css("height", windowsize*ratio );
					$('.slideshow.fullwidth .flexslider').css("height", windowsize*ratio );
					$('.slideshow.fullwidth .flexslider .slides>li').css("height", windowsize*ratio );
					$('.slideshow.fullwidth .flexslider .caption-wrapper').css("height", windowsize*ratio );
				} else {
					$('.slideshow.fullwidth').css("height", initialHeight );
					$('.slideshow.fullwidth .flexslider').css("height", initialHeight );
					$('.slideshow.fullwidth .flexslider .slides>li').css("height", initialHeight );
					$('.slideshow.fullwidth .flexslider .caption-wrapper').css("height", initialHeight );
				}
			});
		};
		
		//Testimonial slider
		//-----------------------------------------------
		if ($(".testimonials .flexslider").length>0) {
			$(window).load(function() {
				$('.testimonials .flexslider').flexslider({
					prevText: "",			//String: Set the text for the "previous" directionNav item
					nextText: "",			//String: Set the text for the "next" directionNav item
					animation: "slide",		//String: Select your animation type, "fade" or "slide"
					directionNav: false,	//Boolean: Create navigation for previous/next navigation? (true/false)
					useCSS: false,			//{NEW} Boolean: Slider will use CSS3 transitions if available
					animationSpeed: 900		//Integer: Set the speed of animations, in milliseconds
				});
			});
		};

		//Scroll totop
		//-----------------------------------------------
		$(window).scroll(function() {
			if($(this).scrollTop() != 0) {
				$(".scrollToTop").fadeIn();	
			} else {
				$(".scrollToTop").fadeOut();
			}
		});
		
		$(".scrollToTop").click(function() {
			$("body,html").animate({scrollTop:0},800);
		});	
		
		//Owl carousel
		//-----------------------------------------------
		if ($('.owl-carousel').length>0) {
			$(".owl-carousel.carousel").owlCarousel({
				items: 4
			});
			$(".owl-carousel.slideshow").owlCarousel({
				singleItem: true,
				autoPlay: true,
				navigation: true,
				navigationText: false
			});
			$(".owl-carousel.gallery").owlCarousel({
				singleItem: true,
				paginationNumbers: true
			});
			$(".owl-carousel.brands").owlCarousel({
				items: 5,
				itemsTablet: 3,
				itemsMobile: 2,
				autoPlay: true
			});
		}

		// Isotope filters
		//-----------------------------------------------
		if ($('.isotope-container').length>0) {
			$(window).load(function() {
				var $container = $('.isotope-container').isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'masonry',
					transitionDuration: '0.6s',
					filter: "*"
				});
				// filter items on button click
				$('.filters').on( 'click', 'ul.nav li a', function() {
					var filterValue = $(this).attr('data-filter');
					$(".filters").find("li.active").removeClass("active");
					$(this).parent().addClass("active");
					$container.isotope({ filter: filterValue });
					return false;
				});
			});
		};

		// Animations
		//-----------------------------------------------
		if (($("[data-animation-effect]").length>0) && !Modernizr.touch) {
			$("[data-animation-effect]").each(function() {
				var $this = $(this),
				animationEffect = $this.attr("data-animation-effect");
				if(Modernizr.mq('only all and (min-width: 768px)') && Modernizr.csstransitions) {
					$this.appear(function() {
						var delay = ($this.attr("data-effect-delay") ? $this.attr("data-effect-delay") : 1);
						if(delay > 1) $this.css("effect-delay", delay + "ms");
						setTimeout(function() {
							$this.addClass('animated object-visible ' + animationEffect);
						}, delay);
					}, {accX: 0, accY: -130});
				} else {
					$this.addClass('object-visible');
				}
			});
		};

		// Stats Count To
		//-----------------------------------------------
		if ($(".stats [data-to]").length>0) {
			$(".stats [data-to]").each(function() {
				var $this = $(this),
				offset = $this.offset().top;
				if($(window).scrollTop() > (offset - 700) && !($this.hasClass('counting'))) {
					$this.addClass('counting');
					$this.countTo();
				};
				$(window).scroll(function() {
					if($(window).scrollTop() > (offset - 700) && !($this.hasClass('counting'))) {
						$this.addClass('counting');
						$this.countTo();
					}
				});
			});
		};

		// Animated Progress Bars
		//-----------------------------------------------
		if ($("[data-animate-width]").length>0) {
			$("[data-animate-width]").each(function() {
				var $this = $(this);
				$this.appear(function() {
					$this.animate({
						width: $this.attr("data-animate-width")
					}, 800 );
				}, {accX: 0, accY: -100});
			});
		};
		
		// Flowtype
		//-----------------------------------------------
		$(window).load(function() {
			$(".fullwidth .caption h1").flowtype({
				fontRatio : 13,
				minFont : 28,
				maxFont : 36,
			});
			$(".fullwidth .caption p").flowtype({
				fontRatio : 34,
				minFont : 16,
				maxFont : 22,
				minimum   : 490
			});
		});

		// Magnific popup
		//-----------------------------------------------
		if ($(".popup-img").length > 0) { 		
			$(".popup-img").magnificPopup({
				type:"image",
				gallery: {
					enabled: true,
				}
			});
		};

		// Fixed header
		//-----------------------------------------------
		var	navigationHeight = $(".main-navigation.fixed").outerHeight(),
		headerTopHeight = $(".header-top").outerHeight(),
		headerHeight = $("header.header").outerHeight();
		$(window).scroll(function() {
			if (($(".main-navigation.fixed").length > 0) && !($(".page-wrapper.boxed").length > 0)) { 
				if(($(this).scrollTop() > navigationHeight+headerHeight + headerTopHeight) && ($(window).width() > 767)) {
					$("body").addClass("fixed-header-on");
					$(".main-navigation.fixed").addClass('animated object-visible fadeInDown');
					if ($(".banner").length>0) {
						$(".banner").css("marginTop", (navigationHeight)+"px");
					} else {
						$("section.main").css("marginTop", (navigationHeight)+"px");
					}
				} else {
					$("body").removeClass("fixed-header-on");
					$("section.main").css("marginTop", (0)+"px");
					$(".banner").css("marginTop", (0)+"px");
					$(".main-navigation.fixed").removeClass('animated object-visible fadeInDown');
				}
			};
		});
		
		// Sharrre plugin
		//-----------------------------------------------
		if ($('#share').length>0) {
			$('#share').sharrre({
				share: {
					twitter: true,
					facebook: true,
					googlePlus: true
				},
				template: '<a href="#" class="btn btn-symb btn-facebook"> <i class="fa fa-facebook"></i></a><a href="#" class="btn btn-symb btn-twitter"><i class="fa fa-twitter"></i></a><a href="#" class="btn btn-symb btn-googleplus"> <i class="fa fa-google-plus"></i></a>',
				enableHover: false,
				enableTracking: true,
				render: function(api, options){
					$(api.element).on('click', '.btn-twitter', function() {
						api.openPopup('twitter');
					});
					$(api.element).on('click', '.btn-facebook', function() {
						api.openPopup('facebook');
					});
					$(api.element).on('click', '.btn-googleplus', function() {
						api.openPopup('googlePlus');
					});
				}
			});
		};
		
		// Google Maps
		//-----------------------------------------------
		if ($("#map-canvas").length>0) {
			var map, myLatlng, myZoom, marker;
			myLatlng = new google.maps.LatLng(41.38791700, 2.16991870);
			myZoom = 12;
			function initialize() {
				var mapOptions = {
					zoom: myZoom,
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					center: myLatlng,
					scrollwheel: false
				};
				map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);
				marker = new google.maps.Marker({
					map:map,
					draggable:true,
					position: myLatlng
				});
				google.maps.event.addDomListener(window, "resize", function() {
					map.setCenter(myLatlng);
				});
			}
			google.maps.event.addDomListener(window, "load", initialize);
		}

		// Contact forms validation
		//-----------------------------------------------		
		if( $("#contact-form").length>0 ){
			$("#contact-form").validate({
				submitHandler: function(form) {

					var submitButton = $(this.submitButton);
					submitButton.button("loading");

					$.ajax({
						type: "POST",
						url: "php/contact-form.php",
						data: {
							"name": $("#contact-form #name").val(),
							"email": $("#contact-form #email").val(),
							"subject": $("#contact-form #subject").val(),
							"message": $("#contact-form #message").val()
						},
						dataType: "json",
						success: function (data) {
							if (data.response == "success") {

								$("#contactSuccess").removeClass("hidden");
								$("#contactError").addClass("hidden");

								// Reset Form
								$("#contact-form .form-control")
									.val("")
									.blur()
									.parent()
									.removeClass("has-success")
									.removeClass("has-error")
									.find("label.error")
									.remove();

								if(($("#contactSuccess").position().top - 80) < $(window).scrollTop()){
									$("html, body").animate({
										 scrollTop: $("#contactSuccess").offset().top - 80
									}, 300);
								}

							} else {

								$("#contactError").removeClass("hidden");
								$("#contactSuccess").addClass("hidden");

								if(($("#contactError").position().top - 80) < $(window).scrollTop()){
									$("html, body").animate({
										 scrollTop: $("#contactError").offset().top - 80
									}, 300);
								}

							}
						},
						complete: function () {
							submitButton.button("reset");
						}
					});
				},				
				// debug: true,
				errorPlacement: function(error, element) {
					error.insertBefore( element );
				},
				onkeyup: false,
				onclick: false,
				rules: {
					name: {
						required: true,
						minlength: 2
					},
					email: {
						required: true,
						email: true
					},
					subject: {
						required: true
					},
					message: {
						required: true,
						minlength: 10
					}
				},
				messages: {
					name: {
						required: "Please specify your name",
						minlength: "Your name must be longer than 2 characters"
					},
					email: {
						required: "We need your email address to contact you",
						email: "Please enter a valid email address e.g. name@domain.com"
					},
					subject: {
						required: "Please enter a subject"
					},
					message: {
						required: "Please enter a message",
						minlength: "Your message must be longer than 10 characters"
					}					
				},
				errorElement: "span",
				highlight: function (element) {
					$(element).parent().removeClass("has-success").addClass("has-error");
					$(element).siblings("label").addClass("hide"); 
				},
				success: function (element) {
					$(element).parent().removeClass("has-error").addClass("has-success");
					$(element).siblings("label").removeClass("hide"); 
				}
			});
		}

		if( $("#preheader-contact-form").length>0 ){
			$("#preheader-contact-form").validate({
				submitHandler: function(form) {

					var submitButton = $(this.submitButton);
					submitButton.button("loading");

					$.ajax({
						type: "POST",
						url: "php/contact-form.php",
						data: {
							"name": $("#preheader-contact-form #name3").val(),
							"email": $("#preheader-contact-form #email3").val(),
							"subject": "none",
							"message": $("#preheader-contact-form #message3").val()
						},
						dataType: "json",
						success: function (data) {
							if (data.response == "success") {

								$("#preheader-contactSuccess").removeClass("hidden");
								$("#preheader-contactError").addClass("hidden");

								// Reset Form
								$("#preheader-contact-form .form-control")
									.val("")
									.blur()
									.parent()
									.removeClass("has-success")
									.removeClass("has-error")
									.find("label.error")
									.remove();

							} else {

								$("#preheader-contactError").removeClass("hidden");
								$("#preheader-contactSuccess").addClass("hidden");

							}
						},
						complete: function () {
							submitButton.button("reset");
						}
					});
				},				
				// debug: true,
				errorPlacement: function(error, element) {
					error.insertBefore( element );
				},
				onkeyup: false,
				onclick: false,
				rules: {
					name3: {
						required: true,
						minlength: 2
					},
					email3: {
						required: true,
						email: true
					},
					message3: {
						required: true,
						minlength: 10
					}
				},
				messages: {
					name3: {
						required: "Please specify your name",
						minlength: "Your name must be longer than 2 characters"
					},
					email3: {
						required: "We need your email address to contact you",
						email: "Please enter a valid email address e.g. name@domain.com"
					},
					message3: {
						required: "Please enter a message",
						minlength: "Your message must be longer than 10 characters"
					}					
				},
				errorElement: "span",
				highlight: function (element) {
					$(element).parent().removeClass("has-success").addClass("has-error");
					$(element).siblings("label").addClass("hide"); 
					
				},
				success: function (element) {
					$(element).parent().removeClass("has-error").addClass("has-success");
					$(element).siblings("label").removeClass("hide"); 
				}
			});
		}

		if( $("#footer-form").length>0 ){
			$("#footer-form").validate({
				submitHandler: function(form) {

					var submitButton = $(this.submitButton);
					submitButton.button("loading");

					$.ajax({
						type: "POST",
						url: "php/contact-form.php",
						data: {
							"name": $("#footer-form #name2").val(),
							"email": $("#footer-form #email2").val(),
							"subject": "none",
							"message": $("#footer-form #message2").val()
						},
						dataType: "json",
						success: function (data) {
							if (data.response == "success") {

								$("#footer-contactSuccess").removeClass("hidden");
								$("#footer-contactError").addClass("hidden");

								// Reset Form
								$("#footer-form .form-control")
									.val("")
									.blur()
									.parent()
									.removeClass("has-success")
									.removeClass("has-error")
									.find("label.error")
									.remove();

							} else {

								$("#footer-contactError").removeClass("hidden");
								$("#footer-contactSuccess").addClass("hidden");

							}
						},
						complete: function () {
							submitButton.button("reset");
						}
					});
				},
				// debug: true,
				errorPlacement: function(error, element) {
					error.insertBefore( element );
				},
				onkeyup: false,
				onclick: false,
				rules: {
					name2: {
						required: true,
						minlength: 2
					},
					email2: {
						required: true,
						email: true
					},
					message2: {
						required: true
					}
				},
				messages: {
					name2: {
						required: "Please specify your name",
						minlength: "Your name must be longer than 2 characters"
					},
					email2: {
						required: "We need your email address to contact you",
						email: "Please enter a valid email address e.g. name@domain.com"
					},
					message2: {
						required: "Please enter a message"
					}					
				},
				errorElement: "span",
				highlight: function (element) {
					$(element).parent().removeClass("has-success").addClass("has-error");
					$(element).siblings("label").addClass("hide"); 
					
				},
				success: function (element) {
					$(element).parent().removeClass("has-error").addClass("has-success");
					$(element).siblings("label").removeClass("hide"); 
				}
			});
		}

		if( $("#comment-form").length>0 ){
			$("#comment-form").validate({
				// debug: true,
				errorPlacement: function(error, element) {
					error.insertBefore( element );
				},
				onkeyup: false,
				onclick: false,
				rules: {
					name4: {
						required: true,
						minlength: 2
					},
					subject4: {
						required: true
					},
					message4: {
						required: true
					}
				},
				messages: {
					name4: {
						required: "Please specify your name",
						minlength: "Your name must be longer than 2 characters"
					},
					subject4: {
						required: "Please enter a subject"
					},
					message4: {
						required: "Please enter a message"
					}					
				},
				errorElement: "span",
				highlight: function (element) {
					$(element).parent().removeClass("has-success").addClass("has-error");
					$(element).siblings("label").addClass("hide"); 
					
				},
				success: function (element) {
					$(element).parent().removeClass("has-error").addClass("has-success");
					$(element).siblings("label").removeClass("hide"); 
				}
			});
		}

		// Pricing tables popovers
		//-----------------------------------------------
		if ($(".pricing-tables").length>0) {
			$(".plan .pt-popover").popover({
				trigger: 'hover'
			});
		};

		// Parallax section
		//-----------------------------------------------
		if (($(".parallax").length>0)  && !Modernizr.touch ){
			$(".testimonials.parallax").parallax("50%", 0.2, false);
		};

	}); // End document ready

})(this.jQuery);

//preheader show/hide
//-----------------------------------------------
function hidePreHeader(){
	jQuery(".preheader .trigger").html("<a href=\"javascript:showPreHeader()\" class=\"triangle closed\"><i class=\"fa fa-plus\"></i></a>");
	jQuery(".preheader-content").slideUp("fast");
}

function showPreHeader() {
	jQuery(".preheader .trigger").html("<a href=\"javascript:hidePreHeader()\" class=\"triangle opened\"><i class=\"fa fa-minus\"></i></a>");
	jQuery(".preheader-content").slideDown("fast");
}