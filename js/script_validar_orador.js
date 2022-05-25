let nombre =document.getElementById("nombre");
let apellido =document.getElementById("apellido");
let areadetexto =document.getElementById("areadetexto-tema");

//definicion de funciones
//quitar clase css error
function quitarClaseError(){
    let x= document.querySelectorAll(".form-control, .form-select");
    let i;
    for(i=0;i<x.length;i++){
        x[i].classList.remove('is-invalid');
    }
}

//calculo pagar
function validarFormulario(){

    quitarClaseError();

    if(nombre.value ===""){
        alert("porfavor, escribe tu nombre");
        nombre.classList.add('is-invalid');
        sec-mai-index-formulario.focus();
        nombre.focus();
        return;

    }


    if(apellido.value ===""){
        alert("porfavor, escribe tu apellido");
        apellido.classList.add('is-invalid');
        sec-mai-index-formulario.focus();
        apellido.focus();
        return;

    }

    if(areadetexto.value ===""){
        alert("escribe un tema para la carla");
        areadetexto.classList.add('is-invalid');
        sec-mai-index-formulario.focus();
        areadetexto.focus();
        return;

    }
};


// boton resumen 


//boton borrar

function enviarFormulario(){
    quitarClaseError();
    validarFormulario();

}
btnenviar.addEventListener('click',enviarFormulario );