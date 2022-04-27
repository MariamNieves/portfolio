$(document).ready(function () {
    
    var scrollBtn = $('.volverArriba')

    
    window.onscroll = function() {
        var y = window.scrollY;
        
        if (y > 600) {
            scrollBtn.css('margin-right','0');
        };
        if (y < 600) {
            scrollBtn.css('margin-right','-60px');
        };
    };

    //movimiento suave de scroll de Inicio y Volver arriba

    $('a.volverArriba').on('click',function (e) {
        e.preventDefault();

        if ($(window).scrollTop() != 0) {
            $('html, body').stop().animate({scrollTop:0}, 1000)
        }
    })

    //Demás botones de scroll
    $('a.scrollSobremi').on('click',function (e) {
        e.preventDefault();
        var seccionOffsetTop = $($(this).attr('href')).offset().top;
            $('html, body').stop().animate({scrollTop:seccionOffsetTop-100}, 1000)
    })

    $('a.scrollServicios').on('click',function (e) {
        e.preventDefault();
        var seccionOffsetTop = $($(this).attr('href')).offset().top;
            $('html, body').stop().animate({scrollTop:seccionOffsetTop-200}, 1000)
    })
    
    $('a.scrollPortafolio').on('click',function (e) {
        e.preventDefault();
        var seccionOffsetTop = $($(this).attr('href')).offset().top;
            $('html, body').stop().animate({scrollTop:seccionOffsetTop-100}, 1000)
    })

    $('a.scrollContactame').on('click',function (e) {
        e.preventDefault();
        var seccionOffsetTop = $($(this).attr('href')).offset().top;
            $('html, body').stop().animate({scrollTop:seccionOffsetTop-100}, 1000)
    })



});
