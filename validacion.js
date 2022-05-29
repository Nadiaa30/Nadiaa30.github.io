var nombreError = document.getElementById('nombre-error');
var emailError = document.getElementById('email-error');
var telError = document.getElementById('tel-error');
var asuntoError = document.getElementById('asunto-error');
var mensajeError = document.getElementById('mensaje-error');
var submitError = document.getElementById('submit-error');

function validarNombre(){
    var name = document.getElementById('nombre').value;
 
    if(name.length == 0){
        nombreError.innerHTML = 'El nombre es obligatorio';
        return false;
    }
   /* if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*&/)){
        nombreError.innerHTML = 'Escriba su nombre';
        return false;
    }*/
    nombreError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validarEmail(){
    var mail = document.getElementById('email').value;

    if(mail.length == 0){
        emailError.innerHTML = 'El correo es obligatorio';
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validarTel(){
    var phone = document.getElementById('tel').value;

    if(phone.length == 0){
        telError.innerHTML = 'El teléfono es obligatorio';
        return false;
    }

    if(phone.length !== 10){
        telError.innerHTML = 'El teléfono debe tener 10 dígitos';
        return false;
    }
    
    telError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validarAsunto(){
    var option = document.getElementById('asunto').value;

    if(option.length == 0){
        asuntoError.innerHTML = 'Debes elegir una opción'
        return false;
    }

    asuntoError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validarMensaje(){
    var message = document.getElementById('mensaje').value;

    if(message.length == 0){
        mensajeError.innerHTML = 'El mensaje es obligatorio';
        return false;
    }

    mensajeError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validarForm(){
    if(!validarNombre() || !validarEmail() || !validarTel() || !validarAsunto() || !validarMensaje() ){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Error envío'
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }
}