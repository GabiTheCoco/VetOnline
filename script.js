//ocultar el header según el scroll que se haga

$(document).ready(function(){
    let prevScrollPos = $(window).scrollTop();
    const header = $("header");

    $(window).on("scroll", function() {
        let currentScrollPos = $(window).scrollTop();
        if (prevScrollPos > currentScrollPos) {
            header.css("top", "0");
        } else {
            header.css("top", "-100px"); /* Ajusta el valor según la altura de tu header */
        }
        prevScrollPos = currentScrollPos;
    });

    let buttonState = localStorage.getItem("form-button");

    // Si no existe en localStorage, establecer el estado inicial
    if (buttonState === null) {
        localStorage.setItem("form-button", "false");
        buttonState = "false";
    }

    if (buttonState === "true") {
        $(".form-button").text("MOSTRAR MASCOTAS");
    } else {
        $(".form-button").text("INGRESAR MASCOTA");
    }
});

    


$(".form-button").on("click", function() {
    let currentState = localStorage.getItem("form-button");

    if (currentState === "false") {
        $(".form-button").text("INGRESAR MASCOTA");
        localStorage.setItem("form-button", "true");
    } else {
        $(".form-button").text("MOSTRAR MASCOTAS");
        localStorage.setItem("form-button", "false");
    }
});

