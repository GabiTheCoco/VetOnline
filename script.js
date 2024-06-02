import { mostrarFormulario } from "./src/js/form.js";

$(document).ready(function(){
    // Logica del scroll y header.
    let prevScrollPos = $(window).scrollTop();
    const header = $("header");

    $(window).on("scroll", function() {
        let currentScrollPos = $(window).scrollTop();
        if (prevScrollPos > currentScrollPos) {
            header.css("top", "0");
        } else {
            header.css("top", "-100px"); 
        }
        prevScrollPos = currentScrollPos;
    });
})

mostrarFormulario();
