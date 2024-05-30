//ocultar el header según el scroll que se haga

$(document).ready(function(){
    $(".form").hide();
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
        $(".form").show();
    } else {
        $(".form-button").text("INGRESAR MASCOTA");
        $(".form").hide();
    }
});

    


$(".form-button").on("click", function() {
    changeState();

    
});

function changeState(){
    let currentState = localStorage.getItem("form-button");

    console.log(currentState);

    if (currentState === "false") {
        $(".form-button").text("MOSTRAR MASCOTAS");
        $(".form").show();
        $(".screen-text").hide();
        localStorage.setItem("form-button", "true");
    } else {
        $(".form-button").text("INGRESAR MASCOTAS");
        $(".form").hide();
        $(".screen-text").show();
        localStorage.setItem("form-button", "false");
    }
}