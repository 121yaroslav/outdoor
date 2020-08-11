/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {

    $("#slider2").responsiveSlides({
        auto: true,
        pager: true,
        speed: 600
    });

    if (document.getElementsByClassName('owl-1').length > 0) {
        $('.owl-1').owlCarousel({
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            //center: true,
            margin: 20,
            loop: true,
            // autoplay:true,
            // autoplayTimeout:4000,
            nav: true,
            items: 1,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                }
            }
        });
    }

    if (document.getElementsByClassName('owl-2').length > 0) {
        $('.owl-2').owlCarousel({
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            //center: true,
            margin: 20,
            loop: true,
            // autoplay:true,
            // autoplayTimeout:4000,
            nav: true,
            items: 1,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                }
            }
        });
    }

    /* GOOGLE MAMS */
    if (document.getElementsByClassName('map').length > 0) {
        init_map1();
    }

    /*  Select style */
    (function ($) {
        $(function () {

            $('select').styler();

        });
    })(jQuery);

    /* Add ISOTOPE */
    if (document.getElementsByClassName('isotope').length > 0) {
        var $isotope = $('.isotope').imagesLoaded(function () {
            $isotope.isotope({
                itemSelector: '.element-item'
            });
        });
        $('#filters').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $isotope.isotope({filter: filterValue});
        });
    }

    /* HEADER ELEMENT ON CLICK */
    if (document.getElementsByClassName('open-main-menu').length > 0) {
        $('.open-main-menu').stop().click(function () {
            $('.main-menu').toggleClass('open');
            if ($('.main-menu').hasClass('open')) {
                $('.fixed-top-menu').addClass('open');
                $('.top').addClass('open');
                $('main').addClass('open');
                $('footer').addClass('open');
            }
            else {
                $('.fixed-top-menu').removeClass('open');
                $('.top').removeClass('open');
                $('main').removeClass('open');
                $('footer').removeClass('open');
            }
        });
    }

    /* CLOSE ELEMENT IN MAIN MENU */
    if (document.getElementsByClassName('main-menu').length > 0) {
        $('.main-menu').find('.close').stop().click(function () {
            $(this).parent().removeClass('open');
            $('.fixed-top-menu').removeClass('open');
            $('.top').removeClass('open');
            $('main').removeClass('open');
            $('footer').removeClass('open');
        });
    }

    /* SCROLL SHOW/HIDE TOP MENU */
    if (document.getElementsByClassName('fixed-top-menu').length > 0) {
        $(window).scroll(function () {

            animate_blocks();

        });
    }

    /* GO TO THE ELEMENT WITH TRANSITION */
    $('a[href^="#"]').stop().click(function () {
        //Ð¡Ð¾Ñ…Ñ€Ð°Ð½ÑÐµÐ¼ Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸Ðµ Ð°Ñ‚Ñ€Ð¸Ð±ÑƒÑ‚Ð° href Ð² Ð¿ÐµÑ€ÐµÐ¼ÐµÐ½Ð½Ð¾Ð¹:
        var target = $(this).attr('href');
        $('html, body').stop().animate({scrollTop: $(target).offset().top}, 400);
        return false;
    });
    $('a[href^="#item-elements"]').stop().click(function () {
        //Ð¡Ð¾Ñ…Ñ€Ð°Ð½ÑÐµÐ¼ Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸Ðµ Ð°Ñ‚Ñ€Ð¸Ð±ÑƒÑ‚Ð° href Ð² Ð¿ÐµÑ€ÐµÐ¼ÐµÐ½Ð½Ð¾Ð¹:
        var target = $(this).attr('href');
        $('html, body').stop().animate({scrollTop: $(target).offset().top}, 200);
        return false;
    });

    /* ISOTOPE ITEM ELEMENTS  */
    if (document.getElementById('filters') !== null) {
        var filters = document.getElementById('filters');
        var filters_buttons = filters.getElementsByTagName('button');

        for (var z = 0; z < filters_buttons.length; z++) {
            filters_buttons[z].onclick = function () {
                clear_class();
                close_elements();
                show_hide_elemets();
                delete_element();
            };
        }


        show_hide_elemets();
    }

    /* DROP-DOWN MENU */
    var down_menu = document.getElementsByClassName('down-menu');
    for (var i = 0; i < down_menu.length; i++) {
        down_menu[i].parentNode.getElementsByTagName('a')[0].onclick = function (e) {
            e = e || Event;
            e.preventDefault();
            if (this.className == 'closed-li') {
                this.className = this.className.replace('closed-li', 'open-li');
                this.parentNode.getElementsByClassName('down-menu')[0].className += ' open';
            }
            else {
                this.className = this.className.replace('open-li', 'closed-li');
                this.parentNode.getElementsByClassName('down-menu')[0].className =
                        this.parentNode.getElementsByClassName('down-menu')[0].className.replace(' open', '');
            }
        };
    }

});


/* WINDOW LOAD */
$(window).load(function () {

    animate_blocks();

});

/* ****************  RESIZE  ********************** */
$(window).resize(function () {

    /* Change map size when resize */
    if (document.getElementsByClassName('map').length > 0) {
        init_map1();
    }
});



/**************************************************  FUNCTIONS **************************************************** */

/* GOOGLE MAP */
function init_map1() {

    var mapPosition = new google.maps.LatLng(40.8, -74.5);

    if ($(window).width() >= 992) {
        var myLocation = new google.maps.LatLng(40.756168, -73.978705);
    }
    else if ($(window).width() >= 768) {
        var myLocation = new google.maps.LatLng(40.756168, -74.178705);
    }
    else {
        var mapPosition = new google.maps.LatLng(41.2, -73.98);
        var myLocation = new google.maps.LatLng(40.756168, -73.978705);
    }

    var mapOptions = {
        zoom: 10,
//        draggable: false,
        scrollwheel: false,
        center: mapPosition
    };
    var iconBase = 'img/';
    var marker = new google.maps.Marker({
        position: myLocation,
        icon: iconBase + 'marker.png',
        title: "Property Location"
    });
    var map = new google.maps.Map(document.getElementById("map1"), mapOptions);
    marker.setMap(map);
}


/* SHOW HIDE ITEM ELEMENTS */
function show_hide_elemets() {
    var items = document.getElementsByClassName('element-item');
    var item_elements = document.getElementsByClassName('item-elements');

    /* Ð”Ð¾Ð´Ð°ÑŽ Ñ–Ð²ÐµÐ½Ñ‚ ÐºÐ»Ñ–Ðº Ð½Ð° ÑƒÑÑ– ÑÑÐ¸Ð»ÐºÑ– Ð² ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð°Ñ… Ñ–Ð·Ð¾Ñ‚Ð¾Ð¿Ð° */
    for (var i = 0; i < items.length; i++) {
        (function (index) {
            items[i].children[0].onclick = function () {

                clear_class();

                delete_element();

                add_elements(item_elements, items, index);

                prev_item(items, item_elements, index);
            };

        })(i);
    }

    /* ÐšÐ½Ð¾Ð¿ÐºÐ° Ð·Ð°ÐºÑ€Ð¸Ñ‚Ð¸ Ð¾Ð±Ð½ÑƒÐ»ÑÑ” ÐºÐ»Ð°ÑÐ¸ */
    var close_item_elements = document.getElementsByClassName('close-item-elements');
    for (var i = 0; i < close_item_elements.length; i++) {
        close_item_elements[i].onclick = function () {
            clear_class();
            close_elements();
            delete_element();
        };
    }

}

/* Ð½Ð°ÑÑ‚ÑƒÐ¿Ð½Ð¸Ð¹ Ð¿Ð¾Ð¿ÐµÑ€ÐµÐ´Ð½Ñ–Ð¹ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚ Ñ–Ð·Ð¾Ñ‚Ð¾Ð¿Ð° */
function prev_item(items, item_elements, index) {
    var next_item = item_elements[0].getElementsByClassName('next-item');

    for (var i = 0; i < next_item.length; i++) {
        next_item[i].onclick = function (e) {
            e.preventDefault();


            var tmp = index;

            index++;
            if (index >= items.length)
                index = 0;

            for (var j = 0; j < items.length; j++) {

                if (items[index].style.display === 'none') {
                    index++;
                    if (index >= items.length)
                        index = 0;
                }
                else
                    break;

            }

            if (tmp !== index) {
                clear_class();

                delete_element();

                add_elements(item_elements, items, index);
            }


        };
    }

    var next_item = item_elements[0].getElementsByClassName('prev-item');

    for (var i = 0; i < next_item.length; i++) {
        next_item[i].onclick = function (e) {
            e.preventDefault();

            var tmp = index;

            index--;
            if (index < 0)
                index = items.length - 1;

            for (var j = 0; j < items.length; j++) {

                if (items[index].style.display === 'none') {
                    index--;
                    if (index < 0)
                        index = items.length - 1;
                }
                else
                    break;

            }

            if (tmp !== index) {
                clear_class();

                delete_element();

                add_elements(item_elements, items, index);
            }

        };
    }
}
/**/

/* ADD ITEM ELEMENTS TO HTML */
function add_elements(item_elements, items, index) {
    $('.load-isotope').fadeIn(0);
    if (item_elements[0]) {


        /*********************************************/
        var xhr = getXmlHttp();
        xhr.open('GET', 'http://intern-2.internship.itembridge.com/out/js/isotope.json', false);
        xhr.onreadystatechange = function () {
            if (xhr.status !== 200) {
                // Ð¾Ð±Ñ€Ð°Ð±Ð¾Ñ‚Ð°Ñ‚ÑŒ Ð¾ÑˆÐ¸Ð±ÐºÑƒ
                alert(xhr.status + ': ' + xhr.statusText);
            } else {
                var x = JSON.parse(xhr.responseText);
            }



            /* add title */
            var h3 = item_elements[0].getElementsByTagName('h3')[0];
            if (x[index].title)
                h3.innerHTML = x[index].title;
            else
                h3.innerHTML = "Add Title";

            /* add images */
            var div = document.getElementsByClassName('change-elements')[0];
            div = div.getElementsByClassName('owl-3')[0];

            var item = document.createElement('div');
            item.setAttribute('class', 'item');
            var img = document.createElement('img');

            if (x[index]) {
                for (var l = 0; l < x[index].image.length; l++) {
                    var item = document.createElement('div');
                    item.setAttribute('class', 'item');
                    var img = document.createElement('img');
                    img.setAttribute('src', x[index].image[l]);
                    item.appendChild(img);
                    div.appendChild(item);
                }
            }
            else
                console.log("You didn't add information in the json file");

            /* add description */

            var description = document.getElementsByClassName('description')[0];
            var span = document.createElement('span');
            span.className = 'isotope-title';
            span.innerHTML = 'Description';
            description.appendChild(span);

            if (x[index].description) {
                for (var i = 0; i < x[index].description.length; i++) {
                    var p = document.createElement('p');
                    var text = document.createTextNode(x[index].description[i]);
                    p.appendChild(text);
                    description.appendChild(p);
                }
            }
            else {
                var p = document.createElement('p');
                var text = document.createTextNode('Add description!');
                p.appendChild(text);
                description.appendChild(p);
            }

            /* add categories , client , link */
            var change_elements = document.getElementsByClassName('change-elements')[0];
            var categories = change_elements.getElementsByClassName('categories')[0];
            var client = change_elements.getElementsByClassName('client')[0];
            var link = change_elements.getElementsByClassName('link')[0];

            if (x[index].categories)
                categories.innerHTML = x[index].categories;
            else
                categories.innerHTML = "Add category";

            if (x[index].client)
                client.innerHTML = x[index].client;
            else
                client.innerHTML = "Add client";

            if (x[index].link)
                link.innerHTML = x[index].link;
            else
                link.innerHTML = "Add link";

            /*********************************************/



            /*********************************************/
            $('.owl-3').owlCarousel({
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                //center: true,
                margin: 0,
                loop: true,
                autoplay: true,
                autoplayTimeout: 4000,
                nav: true,
                items: 1,
                smartSpeed: 1000
            });
            /********************************************/

            if (item_elements[0].className.indexOf('open') === -1) {
                item_elements[0].className += ' open';
            }
            if (items[index].children[0].className.indexOf('hover') === -1)
                items[index].children[0].className += ' hover';

            var check = true;
            while (check) {
                if (div.getElementsByTagName('img').length <= x[index].image.length + 4)
                    check = false;
            }
            setTimeout(function () {
                $('.load-isotope').stop().fadeOut(400);
            }, 400);

        };
        xhr.send(null);
    }
    else
        console.log('no such element');

//    xhr.abort();

}
/*******************************************************************/

/* ÐžÐ±Ð½ÑƒÐ»ÑÑ” ÐºÐ»Ð°ÑÐ¸ */
function clear_class() {
    var items = document.getElementsByClassName('element-item');

    for (var i = 0; i < items.length; i++) {
        items[i].children[0].className = items[i].children[0].className.replace(' hover', '');
    }

}

function close_elements() {
    var item_elements = document.getElementsByClassName('item-elements')[0];
    if (item_elements)
        item_elements.className = item_elements.className.replace(' open', '');
}

/* DELETE OWL ITEMS */
function delete_element() {
    var div = document.getElementsByClassName('change-elements')[0];
    var owl3 = div.getElementsByClassName('owl-3')[0];
    if (owl3.firstChild) {
        var $owl = $('.owl-3');
        $owl.trigger('destroy.owl.carousel');
        $owl.html($owl.find('.owl-stage-outer').html()).removeClass('owl-loaded');

    }
    while (owl3.firstChild) {
        owl3.removeChild(owl3.firstChild);
    }

    var description = div.getElementsByClassName('description')[0];
    while (description.firstChild) {
        description.removeChild(description.firstChild);
    }

}

/* xmlhttprequest crosbrowser */
function getXmlHttp() {
    var xmlhttp;
    try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (E) {
            xmlhttp = false;
        }
    }
    if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}

/* Animate blocks */
function animate_blocks() {

    /* Preloader */
    $('.hidescreen,.load_page').fadeOut(600); //ÑÐºÑ€Ñ‹Ð²Ð°ÐµÑ‚, Ð¿Ð¾ÑÐ»Ðµ Ð·Ð°Ð³Ñ€ÑƒÐ·ÐºÐ¸ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ñ‹
    var z = $(document).scrollTop();
    /* Fixed menu */
    if (document.getElementsByClassName('fixed-top-menu').length > 0) {
        if (z + 100 > $('.top').height()) {
            $('.fixed-top-menu').addClass('scroll-down');
        } else
            $('.fixed-top-menu').removeClass('scroll-down');
    }

    /* animate skills */
    if (document.getElementById('our-team')) {
        var team = document.getElementById('our-team');
        var skills = team.getElementsByClassName('skill');
        if (z >= $(team).offset().top) {
            for (var i = 0; i < skills.length; i++) {
                if (skills[i].className.indexOf('full') === -1)
                    skills[i].className += ' full';
            }
        }

        /* show team img */
        var carousel_img = team.getElementsByClassName('carousel-img');
        if (z + 100 >= $(team).offset().top) {
            for (var i = 0; i < carousel_img.length; i++) {
                if (carousel_img[i].className.indexOf('show') === -1)
                    carousel_img[i].className += ' show';
            }
        }
    }
}

