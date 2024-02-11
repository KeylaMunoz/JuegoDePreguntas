//ingreso de usuario
let usuario = prompt ("Ingrese nombre de usuario:");
let puntos = 0;

while (usuario ===""){
    alert ("Para comenzar, ingresa tu nombre:");
    usuario = prompt ("Ingrese nombre de usuario:");
}

alert("¡Bienvenido/a " + usuario + " a este juego de preguntas!")
alert("¿Comenzamos?🎯")

// preguntas
let pregunta1 = parseInt(prompt("¿Cuales son los colores primarios? \nElije la opción correcta: \n1. Amarillo, Rojo y Verde \n2. Azul, Rojo y Amarillo  \n3. Amarillo, Azul y Violeta"));
pregunta1 = parseInt(pregunta1);

while (isNaN(pregunta1) || pregunta1 < 1 || pregunta1 > 3 || pregunta1 === "") {
    alert("⚠️Por favor, ingresa una opción válida.");

    pregunta1 = prompt("¿Cuales son los colores primarios? \nElije la opción correcta: \n1. Amarillo, Rojo y Verde \n2. Azul, Rojo y Amarillo  \n3. Amarillo, Azul y Violeta");
}
if (pregunta1 == 2){
    alert("🎉¡Respuesta correcta!🎉");
    puntos++;
} else {
    alert("Respuesta incorrecta 🚨");
}


let pregunta2 = prompt("¿Qué elemento principal necesitan las plantas para sobrevivir?");
pregunta2 = pregunta2.toLowerCase();
while (!isNaN(pregunta2) || pregunta2 === "") {
    alert("⚠️Por favor, ingresa una opción válida.");

    pregunta2 = prompt("¿Qué elemento principal necesitan las plantas para sobrevivir?");
    pregunta2 = pregunta2.toLowerCase();
}
if (pregunta2 == "agua"){
    alert("🎉¡Respuesta correcta!🎉");
    puntos++;
} else {
    alert("Respuesta incorrecta 🚨");
}


let pregunta3 = prompt("¿Cuál de estos animales es invertebrado? \n1. Serpiente \n2. Tortuga \n3. Caracol");
pregunta3 = pregunta3.toLowerCase();
while (!isNaN(pregunta3) || pregunta3 === "") {
    alert("⚠️Por favor, ingresa una opción válida.");

    pregunta3 = prompt("¿Cuál de estos animales es invertebrado? \n1. Serpiente \n2. Tortuga \n3. Caracol");
    pregunta3 = pregunta3.toLowerCase();
}
if (pregunta3 == "caracol"){
    alert("¡¡WOW MUY BIEN!!😎 \n¡Al parecer, eres una persona muy inteligente! \n¿Continuamos?");
    puntos++;
} else {
    alert("Respuesta incorrecta🚨");
}


let pregunta4 = (prompt("¿Cuántos meses del año comienzan con la letra M?"));
pregunta4 = parseInt(pregunta4);
while (isNaN(pregunta4) || pregunta4 === "") {
    alert("⚠️Por favor, ingresa una opción válida.");

    pregunta4 = parseInt(prompt("¿Cuántos meses del año comienzan con la letra M?"));
}
if (pregunta4 == 2){
    alert("🎉¡Respuesta correcta!🎉");
    puntos++;
} else {
    alert("Respuesta incorrecta🚨");
}


let pregunta5 = (prompt("¿Cuantos planetas conforman nuestro Sistema Solar?"));
pregunta5 = parseInt(pregunta5);
while (isNaN(pregunta5) || pregunta5 === "") {
    alert("⚠️Por favor, ingresa una opción válida.");

    pregunta5 = parseInt(prompt("¿Cuantos planetas conforman nuestro Sistema Solar?"));
}
if (pregunta5 == 8){
    alert("🎉¡Correcto!🎉 \n Ahora vamos a aumentar un poco la dificultad...🔥");
    puntos++;
} else {
    alert("Respuesta incorrecta🚨");
}


let pregunta6 = (prompt("Se retiró el aire de una cámara y se dejó caer de la misma altura y al mismo tiempo una moneda y una pluma ¿Cuál cae primero? \nElije la opción correcta: \n1. La moneda \n2. La pluma \n3. Ambas caen al mismo tiempo"));
pregunta6 = parseInt(pregunta6);
while (isNaN(pregunta6) || pregunta6 < 1 || pregunta6 > 3 || pregunta6 === "") {
    alert("⚠️Por favor, ingresa una opción válida.");

    pregunta6 = parseInt(prompt("Se retiró el aire de una cámara y se dejó caer de la misma altura y al mismo tiempo una moneda y una pluma ¿Cuál cae primero? \nElije la opción correcta: \n1. La moneda \n2. La pluma \n3. Ambas caen al mismo tiempo"));
}
if (pregunta6 == 3){
    alert("🎉¡¡CORRECTO!!🎉 \n¡Tienes una mente muy brillante!👏👏");
    puntos++;
} else {
    alert("Respuesta incorrecta 🚨");
}

// puntuacion final del usuario
function puntaje (jugador){
    switch (true) {
        case puntos <= 3:
        alert(jugador + " has obtenido 🌟 estrella \n¡Oh no! Tu puntaje es regular 😬");
        break;
        case puntos <= 5:
        alert(jugador + " has obtenido 🌟🌟 estrellas \n¡Lo has hecho bien!✌️");
        break;
        default:
        alert(jugador + " has obtenido 🌟🌟🌟 estrellas \n¡¡FELICIDADES!! LO HAS HECHO EXCELENTE🏆");
        break;
    }
}

puntaje(usuario)
