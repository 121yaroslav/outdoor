$(document).ready(function(){
	
	$('select').styler();
	$('.slide-menu').singlePageNav();

	 $('.category a').click(function(){
	    $('.popup-cont, .portfolio-line').hide();
        $('.category .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 
	
	function calcpopup() {
	  if ($(window).width() < 960) {
		 popupimgwidth = ($(window).width() - 40);
		 popupimgh = popupimgwidth * 0.67;
      }  else {
         popupimgh = '449';
      }
	  popuph = popupimgh;
	  $(".popup .image").css("min-height", ""+ popuph +"px");
	}
	
	function showitem() {
	
		$(".popup > .image").html("<div class='slideshow2'></div>");
		title = '';
		content = '';
		description = '';
		categories = '';
		client = '';
		link = '';
		$.getJSON('/outdoor/dump.json', function(data) { 
			 for (i = 0; i < data.length; i++) {
				  if (id == data[i].id) {
					 for (s = 0; s < data[i].img.length; s++) {
						 content += '<img src="img/isotope/' + data[i].img[s] + '" />';
					 }
					title += data[i].title; 
					description += data[i].description;
					 for (c = 0; c < data[i].category.length; c++) {
						 if (c == 0) {
						 categories += '' + data[i].category[c] + '';
					     } else {
						 categories += ', ' + data[i].category[c] + '';
						 }
					 }
					client += data[i].client;
					link += data[i].link;
			       } 
			 $('.popup > h4').html(title);
			 $('.slideshow2').html(content);
			 $('.popup > .about .description').html(description);
			 $('.popup > .about .categories').html(categories);
			 $('.popup > .about .client').html(client);
			 $(".popup > .about .link a").attr("href", ""+ link + "");
			 $('.popup').attr("id",""+ id +"");
			 }
			 
	  $(".slideshow2").owlCarousel({
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      items : 1,
	  nav: true,
	  navText: ['', ''],
	  loop: true,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [979,1]
      });
	});
	
	 setTimeout(function(){ $(".loading-popup").fadeOut("slow"); }, 100);
	}
		
	function nextprev() {
	   calcpopup();
	   idarray = [];
	   
	   $.getJSON('/outdoor/dump.json', function(data) { 
	        if (showall == '1') {
			 for (i = 0; i < data.length; i++) {
					  	  idarray.push(data[i].id);
			 }  
		    } 

			if (showall == '2') { 
			  for (i = 0; i < data.length; i++) {
			     for (k = 0; k < data[i].category.length; k++) {
				    if (category == data[i].category[k]) {
					  	idarray.push(data[i].id);
				    }
				 }
			 }  
			}
			
			position = jQuery.inArray(activepicid, idarray);
			 
			if (where == 'next') {
			 if(idarray[idarray.length-1] == idarray[position]){
                id = idarray[0];
             }else{
			    id = idarray[position + 1];
             }
			}
			
			if (where == 'prev') {
			 if(idarray[0] == idarray[position]){
                id = idarray[idarray.length-1];
             }else{
			    id = idarray[position - 1];
             }
			}
		    showitem();
			
	    });
	}
	
	$(".pics > figure").on("click", function() {
	   calcpopup();
	   $('.portfolio-line, .popup-cont').show();
	   $(".pics").children().removeClass("pic-active");
	   id = $(this).children("img").data("id");
	   showitem();
	   $('html, body').animate({
        scrollTop: $("section.portfolio > hr").offset().top
       }, 400);
    });

	$(".popup-cont > .nav > .prev, .popup-cont > .nav > .next").on( "click", function() {
	 $(".loading-popup").show();
	   activepicid = $('.popup').attr("id");
	   if ($(".category .current")[0]) {
	     category = $('.category .current').data('filter');
	     category = category.replace(/^\.+/, "");
		 showall = '2';
	        if (category == '*') {
			   showall = '1';
			}
	     } else {
	     showall = '1';
	     }
	   where = $(this).attr('class');
	   nextprev();
    });
	
	$(".popup-cont > .nav > .close").on("click", function() {
	   $('.portfolio-line').fadeOut("fast");
	   $(".popup-cont").fadeOut("fast");
	   $('html, body').animate({
        scrollTop: $("section.portfolio").offset().top
       }, 400);
    });
	
	headerHeight = $('header').height();
	$("header .item").css({"height":headerHeight+"px"});
	
	$('#show-slide-menu').change(function () {
		$('section').toggleClass('content-sliding');
		$('footer').toggleClass('content-sliding');
		
		$('.slide-menu > ul > li a.open').each(function(){
          $(this).toggleClass("open");
          $(this).next("ul").toggle(300);
       });
		
		
    });
	
	$(".slide-menu a.dropdown").click(function(event) {
	      event.preventDefault(event); 
		  $(this).next("ul").children("li").children("a.open").next("ul").toggle(300);
		  $(this).next("ul").children("li").children("a.open").toggleClass("open");
	      $(this).toggleClass("open");
          $(this).next("ul").toggle(300);
    });
	
	$(".slide-menu > ul > li > a").click(function(event) {
	   
	   $('.slide-menu > ul > li > a.open').not(this).each(function(){
		  $(this).next("ul").children("li").children("a.open").next("ul").toggle(300);
		  $(this).next("ul").children("li").children("a.open").toggleClass("open");
		  $(this).toggleClass("open");
          $(this).next("ul").toggle(300);
       });
	   
	   if ( $(this).attr('href') != 'typography.html' ) {
	      event.preventDefault(event);
       }
	   
	   link = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(""+ link +"").offset().top
        }, 700);
    });
	
	$('.slideshow').owlCarousel({
    autoplay: true,
	autoplayTimeout: 15000,
	autoplaySpeed: 100000,
	autoHeight: true,
	navSpeed: 1000,
    /* loop: true, */
    dotsEach: true,
	center: true,
    mergeFit: false,
	animateOut: 'fadeOut',
	mouseDrag: false,
    margin: 0,
    items: 1,
	navText: [
      "<a class=\"arrow prev\"></a>",
      "<a class=\"arrow next\"></a>"
    ]
    });
	
   $('.carousel').owlCarousel({
    loop:true,
    nav:true,
    dots:false,
	margin: 20,
    navText: [
      "<a class=\"arrow prev\"></a>",
      "<a class=\"arrow next\"></a>"
    ],
    items:1,
    responsive:{
        320:{
            items: 1
        },
        430:{
            items: 2
        },
        550:{
            items: 2
        },
        768:{
            items : 3
        } ,
        1008:{
            items : 4
        }
      }
    });

	$(document).on('scroll', function(){
	   var change = '.change';
	   var visibleheader = $('.scroll').visible();
	   var visibletop = $('.change').visible();
	   var visibleteam = $('.team h3').visible();

	   if (visibleheader == true) {
		$(''+change+'').removeClass('fixed');
	   } else {
	    $(''+change+'').removeClass('transition');
		$(''+change+'').addClass('fixed');
		setTimeout(function(){ $(''+change+'').addClass('transition'); }, 500);
	   }
	   if (visibleteam == true) {
		 $(".team .item img").removeClass('small');
		 setTimeout(function(){ $(".progress-b").removeClass('progress-start'); }, 400);
	   }	   
    }); 
	
	$("header .scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("section.about").offset().top
    }, 700);
    });
	
	$("a.top").click(function() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });
	
	 $(window).load(function() { 
       	$('#preloader').addClass('vis-hidden');
     });
	 
	 var $container = $('.pics');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
	 
	 setTimeout(function(){ $("#portfolio .category a[data-filter = '*']").trigger("click"); }, 600);
	
});