//ingreso de usuario
const datosDeUsuario = [];

function guardarUsuario (){
    let nombre = prompt ("Ingrese nombre de usuario:");
    let email = prompt ("Ingrese un email");
    let usuario = prompt ("Ingrese un nombre de usuaraio");
     
    let nuevoUsuario = {
        nombre: nombre,
        email: email,
        usuario: usuario
        };
        
    datosDeUsuario.push(nuevoUsuario);
    return nuevoUsuario;
}
let usuarioGuardado = guardarUsuario();    
let nombreDeUsuario = usuarioGuardado.nombre;    
alert(`¡Bienvenido/a " ${nombreDeUsuario} a este juego de preguntas! \nComencemos!!🚀`);
    
//Preguntas NIVEL 1

let puntajes = {
    nivel1: 0,
    nivel2: 0
};

function RespuestaCorrecta(puntajes, nivel, pregunta, respuestaCorrecta, respuestaJustificada){
    let respuestaIngresada = parseInt(prompt(pregunta));

    while (isNaN(respuestaIngresada) || respuestaIngresada < 1 || respuestaIngresada > 3 || respuestaIngresada === "") {
        alert("⚠️Por favor, ingresa una opción válida.");
        respuestaIngresada = parseInt(prompt(pregunta));
    };

    if (respuestaIngresada === respuestaCorrecta) {
        alert ("🎉¡Respuesta correcta!🎉");
        return puntajes[nivel]++;
    }else {
        alert (`Respuesta incorrecta 🚨 ${respuestaJustificada}`);
    };
}

// Puntuacion del usuario
function Puntaje (puntaje, nivel ){
    if (puntaje <= 1){
        alert(`NIVEL ${nivel}  \n ${nombreDeUsuario} has obtenido 🌟 estrella \n¡Oh no! Tu puntaje es regular 😬`);
    } else if (puntaje <= 2){
        alert(`NIVEL ${nivel}  \n ${nombreDeUsuario} has obtenido 🌟🌟 estrellas \n¡Lo has hecho bien!✌️`);
    } else{
        alert(`NIVEL ${nivel}  \n ${nombreDeUsuario} has obtenido 🌟🌟🌟 estrellas \n¡¡FELICIDADES!! HAS LOGRADO LA MEJOR PUNTUACIÓN 🏆`);
    };
}
let pregunta1 = new RespuestaCorrecta (puntajes, 'nivel1', "¿Cuales son los colores primarios? \n1- Amarillo, Rojo y Verde \n2- Azul, Rojo y Amarillo  \n3- Amarillo, Azul y Violeta", 2, "\nLos colores primarios son el azul, rojo y amarillo");
let pregunta2 = new RespuestaCorrecta (puntajes, 'nivel1', "¿Qué elemento principal necesitan las plantas para sobrevivir? \n1- Agua \n2- Sombra \n3- Tierra", 1, "\nLas plantas no pueden sobrevivir sin agua");
let pregunta3 = new RespuestaCorrecta (puntajes, 'nivel1', "¿Cuál de estos animales es invertebrado? \n1- Serpiente \n2- Tortuga \n3- Caracol", 3, "\nLos caracoles son invertebrados");


Puntaje(puntajes.nivel1,"1");

//Preguntas NIVEL 2
alert("NIVEL 2 \n=¿Estas listo? ¡Comencemos! 🚀")
let puntosNivel2 = 0;

let pregunta4 = new RespuestaCorrecta (puntajes, 'nivel2', "¿Cuántos meses del año comienzan con la letra M? \n1- Tres \n2- Cinco \n3- Dos", 3, "\nSon dos: Marzo y Mayo");
let pregunta5 = new RespuestaCorrecta (puntajes, 'nivel2', "¿Cuantos planetas conforman nuestro Sistema Solar? \n1- Diez \n2- Ocho \n3- Nueve", 2, "\nSon 8: Mercurio, Venus, Tierra, Marte, Júpiter, Saturno, Urano y Neptuno.");
let pregunta6 = new RespuestaCorrecta (puntajes, 'nivel2', "Se retiró el aire de una cámara y se dejó caer de la misma altura y al mismo tiempo una moneda y una pluma ¿Cuál cae primero? \nElije la opción correcta: \n1- La moneda \n2- La pluma \n3- Ambas caen al mismo tiempo", 3, "\nLa gravedad actúa en ambos cuerpos por igual. Entonces al sacar el aire de la cámara, la pluma ya no presenta resistencia.");

Puntaje(puntajes.nivel2,"2");

