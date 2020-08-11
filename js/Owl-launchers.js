
//___1st-Carousel____
$('.owl-carousel-1').owlCarousel({
    autoplay:true,
    autoplayTimeout: 3000,
    loop:true,
    margin:0,
    nav:true,
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

//___2nd_and_3rd-Carousel____
$('.owl-carousel-2,.owl-carousel-3').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        },
        1101:{
            items:4
        }
    }
})
