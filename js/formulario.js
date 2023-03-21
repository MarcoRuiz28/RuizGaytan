

var nombreOk=false;
var apellidoOk=false;
var edadOk=false;
var emailOk=false;

window.onload=function(){
    var everyInputs=document.getElementsByTagName('input');
    for (var i=0;i<(everyInputs.length);i++){
        everyInputs[i].addEventListener('focus',estilo);
        everyInputs[i].addEventListener('blur',estilo2);
        var nodoname=everyInputs[i].name;

        switch (nodoname){
                case "nombre":
                    everyInputs[i].addEventListener('blur',validarNombre);
                    break;
                case "apellido":
                     everyInputs[i].addEventListener('blur',validarApellido);
                    break;
                case "edad":
                    everyInputs[i].addEventListener('blur',validarEdad);
                    break;
                case "email":
                    everyInputs[i].addEventListener('blur',validarEmail);
                    break;
                default :break;
            }
    }
function estilo(){
    this.style.backgroundColor="white";
}
function estilo2(inputElement){
    this.style.background='transparent';
    this.nextSibling.src="./imagenes/ok.png";
}
function estiloRojo(inElement){
    inElement.style.backgroundColor="red";
    inElement.nextSibling.src="./imagenes/alerta.png";
}

function validarNombre(){
        var nombre=document.getElementById("nombre");
        var expresionRegular=/^\w{3,}$/;
        if ((expresionRegular.test(nombre.value))==true){
            nombreOk=true;
            estilo2(nombre);
        }
        else {
            nombreOk=false;
            estiloRojo(nombre);
        }

}

function validarApellido(){
        var apellido=document.getElementById("apellido");
        var expresionRegular=/^\w{3,}$/;
        if ((expresionRegular.test(apellido.value))==true){
            apellidoOk=true;
            estilo2(apellido);
        }
        else {
            apellidoOk=false;
            estiloRojo(apellido);
        }

}

function validarEdad(){
    var edad=document.getElementById("edad");
    if ((edad.value>10) && (edad.value<200)){
        edadOk=true;
        estilo2(edad);
    }
    else {
        edadOk=false;
        estiloRojo(edad);
    }

}

function validarEmail(){
    var valorEmail=document.getElementById("email");
    var expresionRegular=/^([\w-\.]{3,}\@.+\..+)$/;
    var email=convertirMinusculas(valorEmail.value);
    email=comprobarAtEmail(email);
    if ((expresionRegular.test(email))==true) {
        emailOk=true;
        estilo2(valorEmail);
	}
	else {
        emailOk=false;
		estiloRojo(valorEmail);
	}

}


function convertirMinusculas(email){
    return email.toLowerCase();
    }

function comprobarAtEmail(email){
    var expresion=/\sat\s/g;
    return email.replace(expresion,'@');
}

    }
function validarDatos(){
    var msg='Los datos que debe rectificar son:';
    if (nombreOk && apellidoOk && edadOk && emailOk){
        alert ("Ha introducido todos los datos correctamente y su formulario va a ser enviado");
        return true;
    }else{
        if (nombreOk===false){
            msg = msg + ' nombre ';
        }
        if (apellidoOk===false){
            msg = msg + ' apellido ';
        }
        if (edadOk===false){
            msg = msg + ' edad ';
        }
        if (emailOk===false){
            msg = msg + ' email ';
        }
        alert (msg);
        return false;
    }
}
function sendEmail() {
      Email.send({
        Host: "smtp.gmail.com",
        Username: "sender@email_address.com",
        Password: "Enter your password",
        To: 'receiver@email_address.com',
        From: "sender@email_address.com",
        Subject: "Sending Email using javascript",
        Body: "Well that was easy!!",
      })
        .then(function (message) {
          alert("mail sent successfully")
        });
    }

    function bienvenida(){
        alert("Bienvenido a tu registro")
    }