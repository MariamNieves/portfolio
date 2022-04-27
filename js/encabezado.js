$(document).ready(function () {
    let fixedHeader = document.getElementById('fijo');

    window.onscroll = function() {
        var y2 = window.scrollY;
        
        if (y2 > 250) {
            fixedHeader.setAttribute("style","margin-top:0");
            setTimeout(() => {
                fixedHeader.setAttribute("style",'margin-top:-95px');
            }, 5000);
        };
        if (y2 < 200) {
            fixedHeader.setAttribute("style",'margin-top:-95px');
        };
    };
    




    /**/
    let botonMenu = document.getElementById('botonMenu');
    let mostrado = 0;
    let enlaces = document.getElementById('sobreMi');


    function mostrar() {
        let desplegable = document.getElementById('desplegable');
        desplegable.setAttribute('style', 'right:0');
        mostrado = 1;
    };

    function ocultar() {
        desplegable.setAttribute('style', 'right:-35%');
        mostrado = 0;
    };

    botonMenu.onclick = function () {
        if (mostrado == 0){
            mostrar();
        }else{
            ocultar();
        }    
    };

    enlaces.onclick = function () {
        ocultar();
    };




    
});
   

