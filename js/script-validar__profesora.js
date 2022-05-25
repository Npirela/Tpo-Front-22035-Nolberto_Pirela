// definicio de variable y constantes
const valorTicket=200;

let descuentoEstudiante =80;
let descuentoTrainee =50;
let descuentoJunior =15;

let nombre =document.getElementById("nombre");
let apellido =document.getElementById("apellido");
let mail = document.getElementById("mail");
let cantidadTickets =document.getElementById("cantidadTickets");
let categoria =document.getElementById("categoriaSelect");


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
function total_a_pagar(){

    quitarClaseError();

    if(nombre.value ===""){
        alert("porfavor, escribe tu nombre");
        nombre.classList.add('is-invalid');
        nombre.focus();
        return;

    }


    if(apellido.value ===""){
        alert("porfavor, escribe tu apellido");
        apellido.classList.add('is-invalid');
        apellido.focus();
        return;

    }



    if(mail.value ===""){
        alert("porfavor, escribe tu email");
        mail.classList.add('is-invalid');
        mail.focus();
        return;

    }


    //regex mail
    const emailValido =mail=>{
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
    }

    if(!emailValido(mail.value)){
        alert("porfavor, escribe un email valido");
        mail.classList.add('is-invalid');
        mail.focus();
        return;

    }


    //verificar tickets

    if((cantidadTickets.value ==o) || (isNaN(cantidadTickets.value)) ){
        alert("porfavor, selecciona al menos un ticked");
        cantidadTickets.classList.add('is-invalid');
        cantidadTickets.focus();
        return;

    }


    //verificar categoria

    if(categoria.value ===""){
        alert("porfavor, escribe tu email");
        categoria.classList.add('is-invalid');
        categoria.focus();
        return;

    }


    // pago calc
    let totalValorTickets=(cantidadTickets.value) * valorTicket;

    //descuento por categoria
    if(categoria.value == 0){
        totalValorTickets =totalValorTickets;
    }
    if(categoria.value == 1){
        totalValorTickets =totalValorTickets - (descuentoEstudiante/100*totalValorTickets);
    }
    if(categoria.value == 2){
        totalValorTickets =totalValorTickets - (descuentoTrainee/100*totalValorTickets);
    }
    if(categoria.value == 3){
        totalValorTickets =totalValorTickets - (descuentoJunior/100*totalValorTickets);
    }


    //colocar total de pago en la etiqueta
    totalPago.innerHTML = totalValorTickets;

}


// boton resumen 
btnResumen.addEventListener('click', total_a_pagar);

//boton borrar

function reset_total_a_pagar(){
    quitarClaseError();
    totalPago.innerHTML="";

}
btnBorrar.addEventListener('click',reset_total_a_pagar );