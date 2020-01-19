$(document).ready(function() {

    $('.works-btn[filter]').click(function(){
        if($(this).attr('filter') =='all') {
            if($(this).attr('val') =='off') {
                $('.works-btn[filter]').attr('val', 'off');
                $(this).attr('val', 'on');
                $('.works-btn[filter]').removeClass('.focused');
                $(this).addClass('.focused');
                $('.filter > div').show(300);
            }
        } else
        if($(this).attr('val')=='off') {
            $('.works-btn[filter]').attr('val', 'off');
            $(this).attr('val', 'on');
            $('.works-btn[filter]').removeClass('.focused');
            $(this).addClass('.focused');
            $('.filter > div').hide(300);
            var filter = $(this).attr('filter');
            $('.filter > div[filter='+filter+']').show(300);
        }
    });

    /*--lettering--*/
    $(".logo").lettering();
    $(".menu-link").lettering();
    $(".cs-text-cut").lettering('words');
    $(".cs-text-mid").lettering();
    $(".section-header h3").lettering(); 


    /*--slick slider--*/ 
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        dotsClass: 'dots-style',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });

         /* Меню */
        $('ul.header-menu a[href^="#"').click(function () {
            var target = $(this).attr('href');
            $('html, body').animate({
               scrollTop: $(target).offset().top
            }, 800);
            $('ul.menu a[href^="#"').css({
                'color': '#212121'
            });
            $(this).css({
                'color': '#004bee'
             });
             return false;
         });

         /* Выпадающее меню */
        $('.menu-icon').click(function () {
            $('.nav-hide').slideToggle(500);
            $('.nav-hide').css({
                'display': 'flex',
                'justify-content': 'center'
            });
            $('ul.header-menu').css({
                'display': 'flex',
                'flex-direction': 'column',
               'justify-content': 'center',
               'background': 'transparent'
            });
            $('.header-menu li').css({
               'margin-left': '0',
               'margin-top': '5px',
               'margin-bottom': '5px'
            });
            $('.header_slideshow').css({
                'top': '250px',
             });
            if ($('.menu-icon').html() == '<i class="fas fa-bars"></i>') {
               $(this).html('<i class="fas fa-times"></i>');
            } else {
              $(this).html('<i class="fas fa-bars"></i>');
              $('.header_slideshow').css({
                'top': '0px',
             });
            }
        });

        /* Кнопка наверх */
        $(window).scroll(function () {
           if ($(this).scrollTop() != 0)
              $('#toTop').fadeIn();
           else
              $('#toTop').fadeOut();
        });
        $('#toTop').click(function () {
           $('body,html').animate({
              scrollTop: 0
           }, 800);
        });
     });
     
     var btn = document.querySelectorAll('button');
     for (var i = 0; i < btn.length; i++) {
        btn[i].style.outline = 'none';
     }

    /*--animate JS--*/
     $(function () {
        $(window).scroll(function() {
            $('#about .section-header').each(function(){
                var imagePos = $(this).offset().top;
    
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+500) {
                    $(this).addClass("fadeInLeft");
                }
            });
        });
        $(window).scroll(function() {
            $('#about .about-icons__cont').each(function(){
                var imagePos = $(this).offset().top;
    
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+600) {
                    $(this).addClass("fadeInUp");
                }
            });
        });
    })