$(document).ready(function () {
    //movimiento suave de scroll de Inicio y Volver arriba

    document.getElementsByClassName('volverArriba').on('click',function (e) {
        e.preventDefault();

        if ($(window).scrollTop() != 0) {
        document.getElementsByName('html, body').stop().animate({scrollTop:0}, 1000)
        }
    });

    //Demás botones de scroll
    document.getElementsByClassName('scrollSobremi').on('click',function (e) {
        e.preventDefault();
        var seccionOffsetTop = $($(this).attr('href')).offset().top;
        document.getElementsByName('html, body').stop().animate({scrollTop:seccionOffsetTop}, 1000)
    });

    document.getElementsByClassName('scrollServicios').on('click',function (e) {
        e.preventDefault();
        var seccionOffsetTop = $($(this).attr('href')).offset().top;
        document.getElementsByName('html, body').stop().animate({scrollTop:seccionOffsetTop-200}, 1000)
    });

    document.getElementsByClassName('scrollPortafolio').on('click',function (e) {
        e.preventDefault();
        var seccionOffsetTop = $($(this).attr('href')).offset().top;
        documentgetElementsByName('html, body').stop().animate({scrollTop:seccionOffsetTop-50}, 1000)
    });

    document.getElementsByClassName('scrollContactame').on('click',function (e) {
        e.preventDefault();
        var seccionOffsetTop = $($(this).attr('href')).offset().top;
        document.getElementsByName('html, body').stop().animate({scrollTop:seccionOffsetTop+85}, 1000)
    });  



});

