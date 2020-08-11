       

/*______TOP_FIXED_MENU____*/
$(document).ready(function(){

        var $menu = $(".menu");

        $(window).scroll(function(){
            if ( $(this).scrollTop() > 600 && $menu.hasClass("default") ){
                $menu.fadeOut('fast',function(){
                    $(this).removeClass("default")
                           .addClass("fixed transbg")
                           .fadeIn('fast');

                });
            } else if($(this).scrollTop() <= 600 && $menu.hasClass("fixed")) {
                $menu.fadeOut('fast',function(){
                    $(this).removeClass("fixed transbg")
                           .addClass("default")
                           .fadeIn('fast');
                });
            }
        });//scroll

        $menu.hover(
            function(){
                if( $(this).hasClass('fixed') ){
                    $(this).removeClass('transbg');
                }
            },
            function(){
                if( $(this).hasClass('fixed') ){
                    $(this).addClass('transbg');
                }
            });//hover
    });//jQuery
/*___Focus__menu-element__durring__scrolling____*/


/*_____Right_Sidebar_SubList_animation____*/

   $(function() {
   $(".pages").click(function() {
   if($('.pages ul').hasClass('closed-list')){
     $('.sublist').removeClass('closed-list');
     $('.sublist').addClass('opened-list');
    }
   else {
     $('.sublist').removeClass('opened-list');
     $('.sublist').addClass('closed-list');
     }
    });
   });
  $(function() {
  $(".pages").click(function() {
   if($('.pages').hasClass('listStyleImage-plus')){
      $('.pages').removeClass('listStyleImage-plus');
      $('.pages').addClass('listStyleImage-minus');
      }
  else {
      $('.pages').removeClass('listStyleImage-minus');
      $('.pages').addClass('listStyleImage-plus');
      }
     });
    });

//__Our_team_animating___
$(window).scroll(function() {
if ($(this).scrollTop() > 1100){  
    $('.owl-carousel-3 img').removeClass('standart-img');
    $('.owl-carousel-3 img').addClass('increase-img');
  }
if ($(this).scrollTop() > 1300){
    $('.skill .creative').removeClass('span-0');  
    $('.skill .creative').addClass('span-1');
    $('.skill .design').removeClass('span-0');  
    $('.skill .design').addClass('span-2');
    $('.skill .development').removeClass('span-0');  
    $('.skill .development').addClass('span-3');

    $('.skill .photography').removeClass('span-0');  
    $('.skill .photography').addClass('span-1');
    $('.skill .marketing').removeClass('span-0');  
    $('.skill .marketing').addClass('span-2');
    $('.skill .consulting').removeClass('span-0');  
    $('.skill .consulting').addClass('span-3');
  } 
});

//____Open_right_menu______
  $(function() {
  $(".menu-button").click(function() {
  if ( $(".menu-button i").hasClass("fa-bars") ) {
    $(".menu-button i").removeClass("fa-bars");
    $(".menu-button i").addClass("fa-times");
    $('.block-1,.menu,main,footer').addClass('marginLeft-300');
    $('.right-menu,main,footer').removeClass('marginRight300');
    }
  else {
  	$(".menu-button>i").removeClass("fa-times");
    $(".menu-button>i").addClass("fa-bars");
    $('.block-1,.menu,main,footer').removeClass('marginLeft-300');
    $('.right-menu').addClass('marginRight300');
    }  
  })
 });
  /*
    $(function() {
  $(".menu-button").click(function() {
  if ( $(".menu-button i").hasClass("fa-bars") ) {
    $(".menu-button i").removeClass("fa-bars");
    $(".menu-button i").addClass("fa-times");
    $('.block-1,.menu,main,footer').css('marginLeft','-300px');
    $('.right-menu,main,footer').css('marginRight','0px');
    }
  else {
    $(".menu-button>i").removeClass("fa-times");
    $(".menu-button>i").addClass("fa-bars");
    $('.block-1,.menu,main,footer').css('marginLeft','0px');
    $('.right-menu').css('marginRight','-300px');
    }  
  })
 });
/*_________close______*/
  $(function() {
  $(".close").click(function() {
    $(".menu-button>i").removeClass("fa-times");
    $(".menu-button>i").addClass("fa-bars");
    if($('.block-1,.menu,main,footer').hasClass("marginLeft-300")) {
      $('.block-1,.menu,main,footer').removeClass('marginLeft-300');
      $('.right-menu').addClass('marginRight300');
      }   
   })
 });

/*_____Google_map_____________*/



  
 function initialize() {
     

    //получаем наш div куда будем карту добавлять
    var mapCanvas = document.getElementById('map-canvas');
    // задаем параметры карты
    var mapOptions = {
        //Это центр куда спозиционируется наша карта при загрузке
        center: new google.maps.LatLng(33.782422, -79.935364),
        scrollwheel: false,
        //увеличение под которым будет карта, от 0 до 18
        // 0 - минимальное увеличение - карта мира
        // 18 - максимально детальный масштаб
        zoom: 10, 
        //Тип карты - обычная дорожная карта
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    //Инициализируем карту
    var map = new google.maps.Map(mapCanvas, mapOptions);
 
    //Объявляем массив с нашими местами и маркерами
    var markers = [],
        myPlaces = [];
    //Добавляем места в массив
    myPlaces.push(new Place('', 32.782422, -79.935364, ''));
    
    //Теперь добавим маркеры для каждого места
    for (var i = 0, n = myPlaces.length; i < n; i++) {
        var marker = new google.maps.Marker({
            //расположение на карте
            position: new google.maps.LatLng(myPlaces[i].latitude, myPlaces[i].longitude),
            map: map,
            //То что мы увидим при наведении мышкой на маркер
            title: myPlaces[i].name
        });
        //Добавим попап, который будет появляться при клике на маркер
        var infowindow = new google.maps.InfoWindow({
            content: '<h1>' + myPlaces[i].name + '</h1><br/>' + myPlaces[i].description
        });
        //привязываем попап к маркеру на карте
        makeInfoWindowEvent(map, infowindow, marker);
        markers.push(marker);
    }

}
function makeInfoWindowEvent(map, infowindow, marker) {
    //Привязываем событие КЛИК к маркеру
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });




}

//Это класс для удобного манипулирования местами
function Place(name, latitude, longitude, description){
    this.name = name;  // название
    this.latitude = latitude;  // широта
    this.longitude = longitude;  // долгота
    this.description = description;  // описание места
}
//Когда документ загружен полностью - запускаем инициализацию карты.
google.maps.event.addDomListener(window, 'load', initialize);





/*___Isotope__Image__Loaded____*/
if (document.getElementsByClassName('.grid').length > 0) {
        var $isotope = $('.grid').imagesLoaded(function () {
            $isotope.isotope({
                itemSelector: '.element-item'
            });
        });
        $('#filters').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $isotope.isotope({filter: filterValue});
        });
    };
           
/*_____Portfolio_Slider___*/
$('.overlay').click(function() {
  $(".portfolio-slider").removeClass('hideSlider');
  $(".portfolio-slider").addClass('showSlider');
});

$( ".closeCross" ).click(function() {
    // Animation complete.
    $( ".portfolio-slider" ).removeClass('showSlider');
    $( ".portfolio-slider" ).addClass('hideSlider');
});


/*Isotope__refresh___*/

 /*if (document.getElementsByClassName('grid').length > 0) {
        var $isotope = $('.grid').imagesLoaded(function () {
            $isotope.isotope({
                itemSelector: '.element-item'
            });
        });
        $('#filters').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $isotope.isotope({filter: filterValue});
        });
    }*/


/*Form__verification___*/
function validate () {
  var varName=document.forms['form']['name'].value,
  varEmail=document.forms['form']['email'].value,
  re = /[A-Za-z0-9]{1,15}@[A-Za-z0-9]{1,15}\.[A-Za-z]{2,7}/g;
/*a = a.charAt(0).toUpperCase() + a.substr(1).toLowerCase();
  $('.input').val(a);
*/
  if(varEmail.match(re)) {;}
  else {
    
    
  }
}
function hintOnName (){
  if($('span.SPNname').hasClass('hintOFF')){
    $('span.SPNname').removeClass('hintOFF');
    $('span.SPNname').addClass('hintON1'); 
  }
}
function hintOnEmail (){
  if($('span.SPNemail').hasClass('hintOFF')){
    $('span.SPNemail').removeClass('hintOFF');
    $('span.SPNemail').addClass('hintON2'); 
  }
}
function hintOffName (){
  if($('span.SPNname').hasClass('hintON1')){
    $('span.SPNname').removeClass('hintON1');
    $('span.SPNname').addClass('hintOFF'); 
  }  
}
function hintOffEmail (){
  if($('span.SPNemail').hasClass('hintON2')){
    $('span.SPNemail').removeClass('hintON2');
    $('span.SPNemail').addClass('hintOFF'); 
  }  
}