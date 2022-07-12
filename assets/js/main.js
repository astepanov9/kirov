(function ($) {
    "use strict";

    // Плавное появление элементов
    new WOW().init();

    // Mobile menu
    $('.header__mobile-burger').click(function (event) {
        event.preventDefault();
        $(this).toggleClass('burger-active');
        $('.header__mobile-body nav').slideToggle('slow');
    });

    $('.header__mobile-body nav ul li a').click(function () {
        $('.header__mobile-body nav').slideToggle('slow');
        $('.header__mobile-burger').toggleClass('burger-active');
    });

    // Back to top button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(100)
        } else {
            $('.back-to-top').fadeOut(100)
        }
    });

    // Preload
    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut('500');
    })

    // Sticky
    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 600) {
            $(".header__top").removeClass("sticky");
        } else {
            $(".header__top").addClass("sticky");
        }
    });

    // Input mask
    $(".tel-mask").mask("+7 (999) 999-99-99");

    // Форма
    $('#feedbackForm').submit(function (event) {
        event.preventDefault();
        $('#feedbackForm')[0].reset();
        $('.modal-thnx').css('display', 'block');
    });

    $('.modal-btn').on('click', function () {
        $('.modal-header h2').text(this.innerHTML);
    });

    //Доп возможности слайдер
    $('.dop .single-item').slick({
        infinite: true,
        speed: 400,
        fade: true,
        cssEase: 'linear',
        dots: true,
        // autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

})(jQuery);
