$(document).ready(function () {
    
    var boton = $('#botonMenu');
    var desplegable = $('#desplegable');
    var opciones = $('#desplegable a');
    var show = 0

    function mostrarOcultar(e) {
        e.preventDefault
        if (show == 0) {
            desplegable.animate({right: '0%'},250);
            show = 1;
        } else{
            desplegable.animate({right: '-40%'},250);
            show = 0;
        }
    }

    function ocultar() {
        desplegable.animate({right: '-40%'},250);
            show = 0;
    }

    opciones.on('click',ocultar);

    boton.on('click', mostrarOcultar);

    









});
