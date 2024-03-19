const preg = document.querySelector('.preguntaPrincipal'),
resp1 = document.querySelector('.respuesta1'),
resp2 = document.querySelector('.respuesta2'),
resp3 = document.querySelector('.respuesta3'),
resp4 = document.querySelector('.respuesta4'),
contenedor = document.querySelector ('contenedorCard'),
forPreg = document.querySelector('.formularioPreguntas'),
salir = document.querySelector('#botonSalir'),
mensaje = document.querySelector('#msj');

//funcion para salir
salir.onclick = () => {
    window.location.href = "./inicio.html";
}


// Función para mostrar la pregunta y sus respuestas

let preguntaIndex = 0;
function mostrarPregunta(pregunta, opciones) {

    preg.innerText = pregunta[preguntaIndex];
    resp1.innerText = opciones[preguntaIndex][0];
    resp2.innerText = opciones[preguntaIndex][1];
    resp3.innerText = opciones[preguntaIndex][2];
    resp4.innerText = opciones[preguntaIndex][3];
}

// Preguntas y respuestas
const pregunta1 = "¿Cuales son los colores primarios?",
opciones1 = ["Amarillo, Rojo y Verde", "Azul, Rojo y Amarillo", "Amarillo, Azul y Violeta", "Rojo, Azul y Verde"],

pregunta2 = "¿Cuantos planetas conforman nuestro Sistema Solar?",
opciones2 = ["Siete", "Nueve", "Ocho", "Todas son icorrectas"],

pregunta3 = "¿Cuál de estos animales es invertebrado?",
opciones3 = ["Serpiente", "Tortuga", "Todas son incorrectas", "Gusano"];

const preguntas = [pregunta1, pregunta2, pregunta3],
opciones = [opciones1, opciones2, opciones3];

//Seleccionar respuesta correcta
const respuestaCorrecta = [opciones1[1], opciones2[2], opciones3[3]];

resp1.addEventListener('click', verificarRespuesta);
resp2.addEventListener('click', verificarRespuesta);
resp3.addEventListener('click', verificarRespuesta);
resp4.addEventListener('click', verificarRespuesta);     

function preguntaSiguiente(){
    preguntaIndex++;

    if (preguntaIndex < preguntas.length){
        mostrarPregunta(preguntas, opciones);
    }else{
        console.log("fin del juego");
    }
}


function verificarRespuesta(event) {        
    const respuestaSeleccionada = event.target.innerText;
    
    if (respuestaCorrecta.includes(respuestaSeleccionada)) {
        console.log("correcto");
        // mensaje.innerText = "🎉¡Respuesta correcta!🎉";
    }else{
        console.log("incorrecto");
        // mensaje.innerText = "Respuesta incorrecta 🚨";
    }
    preguntaSiguiente();       
}

mostrarPregunta(preguntas, opciones);
