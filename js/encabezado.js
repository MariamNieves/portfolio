$(document).ready(function () {
    let fixedHeader = document.getElementById('fijo');

    window.onscroll = function() {
        var y2 = window.scrollY;
        
        if (y2 > 250) {
            fixedHeader.setAttribute("style","margin-top:0");
        };
        if (y2 < 200) {
            fixedHeader.setAttribute("style",'margin-top:-95px');
        };
    };
        
});
   

