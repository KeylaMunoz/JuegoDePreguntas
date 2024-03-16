const formularioReg = document.querySelector('#formulario'),
nombreReg = document.querySelector('#nombre'),
usuarioReg = document.querySelector('#usuario'),
emailReg = document.querySelector('#email'),
passReg = document.querySelector('#password'),
registrarReg = document.querySelector('#registrar');

//constructor de usuario
class Usuario {
    constructor (nombre, usuario, email, password) {
        this.nombre = nombre;
        this.usuario = usuario;
        this.email = email;
        this.password = password;
    }
}


//crear usuario

let usuarios;

usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];



//guardar en LS
function guardarLS(arr){
    return localStorage.setItem('usuarios', JSON.stringify(arr))
}

//Evento del formulario creado
formularioReg.addEventListener('submit', (e) => {
    e.preventDefault();

    const nuevoUsuario = new Usuario(nombreReg.value, usuarioReg.value, emailReg.value, passReg.value);
    usuarios.push(nuevoUsuario);
    guardarLS(usuarios);
})





