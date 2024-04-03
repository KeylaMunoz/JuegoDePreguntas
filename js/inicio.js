const btnComienzo = document.querySelector('.posicionBoton'),
juego = document.querySelector('.juego'),
contenedorInicio = document.querySelector('.contenedorInicio'),
contenedorLoading = document.querySelector('.wrapper'),
contenedor = document.querySelector ('contenedorCard'),
forPreg = document.querySelector('.formularioPreguntas'),
preg = document.querySelector('.preguntaPrincipal'),
resp1 = document.querySelector('.respuesta1'),
resp2 = document.querySelector('.respuesta2'),
resp3 = document.querySelector('.respuesta3'),
resp4 = document.querySelector('.respuesta4'),
salir = document.querySelector('#botonSalir');


const verificacionUsuario = JSON.parse(localStorage.getItem('verificacionUsuario'));
console.log(verificacionUsuario);

//controlamos la animacion Loading
contenedorLoading.style.display = `none`;
function loading (display){
    contenedorLoading.style.display = `${display}`;
}

//funcion para visibilizar juego 
function empezarJuego () {
    juego.classList.add("mostrarJuego");
}

//comienzo del juego 
btnComienzo.onclick = () => {
    btnComienzo.style.display = "none";
    loading("block");
    new Promise((resolve, reject) => {
        setTimeout(() => {
            loading("none");
            document.body.style.backgroundImage = "url('../images/fondo2.png')";
            empezarJuego();
            resolve();
        },5000);
    });
};

//funcion para salir de las preguntas
salir.onclick = () => {
    window.location.href = "./inicio.html";
}

// Preguntas y respuestas
const pregunta1 = "¿Cuáles son los colores primarios?",
opciones1 = ["Amarillo, Rojo y Verde", "Azul, Rojo y Amarillo", "Amarillo, Azul y Violeta", "Rojo, Azul y Verde"],

pregunta2 = "¿Cuántos planetas conforman nuestro Sistema Solar?",
opciones2 = ["Siete", "Nueve", "Ocho", "Todas son icorrectas"],

pregunta3 = "¿Cómo se escribe el número 19 en numeración romana?",
opciones3 =["XIX", "XVIII", "IXX", "XXI"],

pregunta4 = "¿Cuál de estos animales es invertebrado?",
opciones4 = ["Serpiente", "Pulpo", "Tortuga", "Pez"],

pregunta5 = "¿Cuál de estos animales es un mamífero?",
opciones5 = ["Ballena","Murciélago","Ornitorrinco","Todas son correctas"],

pregunta6 = "¿A cuánto equivale un kilómetro?",
opciones6 = ["10.000 metros", "1.000 metros", "10.000 centímetros", "100 hectómetros"],

pregunta7 = "¿A cuál planeta le llaman 'Planeta Rojo'?",
opciones7 =["Marte", "Júpiter", "Venus", "Saturno"],

pregunta8 = "Qué pesa más, ¿un kilo de plomo un kilo de plumas?",
opciones8 = ["El plomo", "Las plumas", "Pesan lo mismo", "Ninguno, son diferentes"];

const preguntas =[pregunta1, pregunta2, pregunta3, pregunta4, pregunta5, pregunta6, pregunta7, pregunta8];
const opciones=  [opciones1, opciones2, opciones3, opciones4, opciones5, opciones6, opciones7, opciones8];

// Función para mostrar la pregunta y sus respuestas
let preguntaIndex = 0;
function mostrarPregunta() {

    preg.innerText = preguntas[preguntaIndex];
    resp1.innerText = opciones[preguntaIndex][0];
    resp2.innerText = opciones[preguntaIndex][1];
    resp3.innerText = opciones[preguntaIndex][2];
    resp4.innerText = opciones[preguntaIndex][3];
}
mostrarPregunta();

// Función para mostrar la siguiente pregunta
function preguntaSiguiente() {
    preguntaIndex++;
    if (preguntaIndex < preguntas.length) {
        mostrarPregunta();
    }else{
        setTimeout(()=>{puntaje(puntajes)},2000);
    }
}

//Respuestas correctas
const respuestaCorrecta = [opciones1[1], opciones2[2], opciones3[0], opciones4[1], opciones5[3], opciones6[1], opciones7[0], opciones8[2]];

//validacion de cada respuesta
let puntajes = 0;
function verificarRespuesta(event) {
    const respuestaSeleccionada = event.target.innerText;

     if (respuestaCorrecta.includes(respuestaSeleccionada)) {
         puntajes++;
         Swal.fire({
             title: "🎉¡Respuesta correcta!🎉",
             text: "Siguiente pregunta...",
             icon: "success"
         });
         preguntaSiguiente();
 }else {
         Swal.fire({
             title: "Respuesta incorrecta 🚨",
             text: "Siguiente pregunta...",
             icon: "error"
         });
         preguntaSiguiente();
     }
};

resp1.addEventListener('click', verificarRespuesta);
resp2.addEventListener('click', verificarRespuesta);
resp3.addEventListener('click', verificarRespuesta);
resp4.addEventListener('click', verificarRespuesta);

//Puntaje obtenido

 function puntaje (puntaje){
     if (puntaje <= 3){
         Swal.fire({
             title: "¡Oh no..!",
             text: "Has obtenido 1 estrella 😬",
            imageUrl: "../images/1punto.png",
            imageWidth: 400,
             imageHeight: 210,
             imageAlt: "Custom image"
           });
     } else if (puntaje <= 7){
         Swal.fire({
             title: "¡Muy bien!",
             text: "Has obtenido 2 estrellas 😎",
             imageUrl: "../images/2punto.png",
             imageWidth: 400,
             imageHeight: 210,
             imageAlt: "Custom image"
           });
     } else{
         Swal.fire({
             title: "¡PERFECTO!",
             text: "Has obtenido 3 estrellas 🥳",
             imageUrl: "../images/3punto.png",
             imageWidth: 400,
             imageHeight: 210,
             imageAlt: "Custom image"
           });
     };
     setTimeout(() => {
        window.location.href = "./inicio.html";
    },3000);
 };
