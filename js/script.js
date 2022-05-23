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
    return /^[a-zA-Z]{1,200}$/.test(apellido);
}
const cantidadValido = cantidad => {
    return /^\d*/.test(cantidad);
}
    







// construir funciones
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

//validar campos

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

/*Add Instant feedback feature
The form only shows the error or success when you click the Sign Up button.

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