// definicio de variables
const valorTicket=200;
const descuentoEstudiante=80;
const descuentoTrainee=50;
const descuentoJunior=15;

let form = document.getElementById('form-compra-ticked');
let nombre  = document.getElementById("nombre");
let apellido  = document.getElementById("apellido");
let email = document.getElementById("email");
let cantidadTickets  = document.getElementById("cantidad");
let categoria = document.getElementById("categoria");

// regex
const emailValido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const nameValido = nombre => {
    return /^[a-zA-ZñÑ]{1,200}$/.test(nombre);
}

    
const apellidoValido = apellido => {
    return /^[a-zA-ZñÑ]{1,200}$/.test(apellido);
}
const cantidadValido = cantidad => {
    return /^\d*/.test(cantidad);
}
    







// construir funciones
//validar campos
const checkName = () =>{
    let valid = false;

    if(nombre.value === ""){
        alert("Por favor escribe tu nombre sin espacios.");
        nombre.classList.add("is-invalid");
        nombre.focus();
    } else if(!nameValido(nombre.value)){
        alert("Por favor escribe tu nombre sin espacios vacios ni numeros");
        nombre.classList.add("is-invalid");
        nombre.focus();

    } else{
        valid = true;
        nombre.classList.remove("is-invalid");
        nombre.classList.add("is-valid");
    }

    return valid;
};



const checkApellido = () =>{
    let valid = false;

    if(apellido.value === ""){
        alert("Por favor escribe tu apellido sin espacios (el campo no puede estar vacio).");
        apellido.classList.add("is-invalid");
        apellido.focus();
    } else if(!apellidoValido(apellido.value)){
        alert("Por favor escribe tu apellido sin espacios vacios ni numeros");
        apellido.classList.add("is-invalid");
        apellido.focus();

    } else{
        valid = true;
        apellido.classList.remove("is-invalid");
        apellido.classList.add("is-valid");
    }

    return valid;
};


const checkEmail = () =>{
    let valid = false;

    if(email.value === ""){
        alert("Por favor escribe tu email sin espacios (el campo no puede estar vacio).");
        email.classList.add("is-invalid");
        email.focus();
    } else if(!emailValido(email.value)){
        alert("Por favor escribe tu email sin espacios vacios ni numeros");
        email.classList.add("is-invalid");
        email.focus();

    } else{
        valid = true;
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");
    }

    return valid;
};

const checkCantidad = () =>{
    let valid = false;

    if((cantidadTickets.value == 0) || (isNaN(cantidadTickets.value)) ){
        alert("Por favor selecciona al menos un ticket.");
        cantidadTickets.classList.add("is-invalid");
        cantidadTickets.focus();
    } else if(!cantidadValido(cantidadTickets.value)){ //valida los mismo que isnan
        alert("Por favor escribe solo puedes colocar cantidad en numeros");
        cantidadTickets.classList.add("is-invalid");
        cantidadTickets.focus();

    } else{
        valid = true;
        cantidadTickets.classList.remove("is-invalid");
        cantidadTickets.classList.add("is-valid");
    }

    return valid;
};


const checkCategoria = () =>{
    let valid = true;
    if(categoria.value == 0){
      alert("si no seleccionas una categoria no tendras descuento ");
      cantidadTickets.classList.add("is-valid");
    }
    if(categoria.value >= 4){
        alert("debes seleccionar una categoria valida ");
        cantidadTickets.classList.add("is-invalid");
        cantidadTickets.focus();
        valid = false;
    }
    return valid;
};

// funcion para limpiar la clase de error.
function quitarClaseError(){
let x =document.querySelectorAll(".form-control, .form-selector")
let i;
for (i=0; i<x.length; i++){
    x[i].classList.remove('is-invalid')

};
};

// funcion boton de resumen
function total_a_pagar(){
    quitarClaseError();


    //calculo del pago
    let totalValorTickets = (cantidadTickets.value) * valorTicket;

    //aplicando descuentos
    if(categoria.value == 0){
        totalValorTickets = totalValorTickets;
    }
    if(categoria.value == 1){
        totalValorTickets = totalValorTickets -(descuentoEstudiante / 100 * totalValorTickets);
    }
    if(categoria.value == 2){
        totalValorTickets = totalValorTickets -(descuentoTrainee/ 100 * totalValorTickets);
    }
    if(categoria.value == 3){
        totalValorTickets = totalValorTickets -(descuentoJunior/ 100 * totalValorTickets);
    }
    
    totalPago.innerHTML = totalValorTickets;
};

//borrar el valor del alert total a pagar
function resetTotalPago(){
    quitarClaseError();
    totalPago.innerHTML="";
}
btnBorrar.addEventListener('click', resetTotalPago);



// funcion del submit (boton resumen)

form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let isNameValid = checkName(),
        isApellidoValid= checkApellido(),
        isEmailValid = checkEmail(),
        isCantidadValid = checkCantidad(),
        isCategoriaValid = checkCategoria();

    let isFormValid = isNameValid &&
        isEmailValid &&
        isApellidoValid &&
        isCantidadValid &&
        isCategoriaValid;

    // submit to the server if the form is valid
    if (isFormValid) {

        total_a_pagar();
    }
});

/*
To provide instant feedback, you can attach an event listener to the input event of each field and validate it.

It’s even better to use the event delegation so that you attach the input event listener to the form and validate each field based on the current field id, like this:*/

form.addEventListener('input', function (e) {
    switch (e.target.id) {
        case 'nombre':
            checkName();
            break;
        case 'apellido':
            checkApellido();
            break;
        case 'email':
            checkEmail();
            break;
        case 'cantidad':
            checkCantidad();
            break;
        case 'categoria':
            checkCategoria();
            break;
    }
});