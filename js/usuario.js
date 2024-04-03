const contAvatar = document.querySelector('.contAvatar'),
cardUsuario = document.querySelector('.cardUsuario'),
nombreAvatar = document.querySelector('.nombreAvatar');

//capturamos el nombre del usuario y lo utilizamos para el nombre del avatar
const verificacionUsuario = JSON.parse(localStorage.getItem('verificacionUsuario'));
nombreAvatar.innerText = `¡Hola ${verificacionUsuario.nombre}!`;

let imagenSeleccionada = document.querySelector('#imgSeleccionada');


// traemos las img de avatares con FETCH

let avatares = [];
let img ;

fetch('../db/db.json')
.then((response) => response.json())
.then((data) => {
    
    //pintamos las img guardadas en db.json en el HTML
    avatares = data;
    for (let i = 0; i < avatares.length; i++) {   
        img = document.createElement('img');
        img.src = `../images/${avatares[i]}`;
        img.alt = `Avatar ${i + 1}`;
        img.className = 'avatar';
        contAvatar.append(img);
    };
    
    //Mostrar y guardar la imagen que seleccione el usuario 
    const imgAvatar = document.querySelectorAll('.avatar');
    
    imgAvatar.forEach(imgAvatar => {
        imgAvatar.addEventListener('click', () => {
            
        imagenSeleccionada.src = imgAvatar.src;  
        
        localStorage.setItem('imgPerfil', imgAvatar.src);
    });   
});
})
.catch((error) => {
    window.location.href = "./inicio.html"
});

//traemos de LS el avatar del usuario cada vez que recargue la pagina
window.addEventListener('DOMContentLoaded', () => {
        const imgPerfil = localStorage.getItem('imgPerfil');
        
        if (imgPerfil) {
            imagenSeleccionada.src = imgPerfil;
        }else{
            console.log("nadita");
        }
    });



