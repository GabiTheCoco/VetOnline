$(document).ready(function(){
    //establecer el estado que muestra el formulario a false
    let buttonState = sessionStorage.setItem("form-button", "false");

    // Si no existe en sessionStorage, establecer el estado inicial
    if (buttonState === null) {
        sessionStorage.setItem("form-button", "false");
        buttonState = "false";
    }

    // Se oculta el formulario
    $(".form").hide();

    
});

let caracteristicas = [];
let contador = 0;

// Función para restablecer el estado del formulario
function resetearFormulario() {
    contador = 0;
    caracteristicas = [];
    $(".caracteristicas").val($(".caracteristicas option:first").val()); // Reiniciar el select a la primera opción
    $(".input-carac input").val(""); // Limpiar el campo de entrada
    $(".input-container input").val(""); // Limpiar el campo de entrada
    
    console.log(contador + " reseteo");
}

function agregarCaracteristica() {
    $(".btn-carac").off("click").on("click", function() {
        let selectCaracteristicas = $(".caracteristicas");
        let opciones = $(".caracteristicas option");
        let inputCaracterisica = $(".input-carac input");

        if (inputCaracterisica.val() !== "" && contador < 3) {
            let cadena = selectCaracteristicas.val() + ": " + inputCaracterisica.val();
            caracteristicas.push(cadena);
            selectCaracteristicas.find('option:selected').removeAttr('selected');
            contador++;
            console.log(contador)

            if (contador < opciones.length) {
                opciones.eq(contador).prop('selected', true);
                inputCaracterisica.val("").focus();
            }else{
                inputCaracterisica.val("");
                alert("Ya completó todas las características");
            }
        } else {
            if (contador >= 3){
                alert("Ya completó todas las características");
                inputCaracterisica.val("");
            }
            else{
                alert("Ingrese una caracteristica, por favor");
                inputCaracterisica.focus();   
            }
        }
    })
}


function changeState(){
    let currentState = sessionStorage.getItem("form-button");

    console.log(currentState);

    if (currentState === "false") {
        $(".form-button").text("MOSTRAR MASCOTAS");
        $(".form").show();
        $(".screen-text").hide();
        sessionStorage.setItem("form-button", "true");
    } else {
        $(".form-button").text("INGRESAR MASCOTAS");
        $(".form").hide();
        $(".screen-text").show();
        sessionStorage.setItem("form-button", "false");
    }
}

export function mostrarFormulario() {
    $(".form-button").off("click").on("click", function() {
        changeState();
        resetearFormulario();
        agregarCaracteristica();
    });
}


