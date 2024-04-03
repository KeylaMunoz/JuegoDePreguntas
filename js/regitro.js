const formularioReg = document.querySelector('#formulario'),
nombreReg = document.querySelector('#nombre'),
usuarioReg = document.querySelector('#usuario'),
emailReg = document.querySelector('#email'),
passReg = document.querySelector('#password'),
msjIng = document.querySelector('.msjIngreso'),
registrarReg = document.querySelector('#registrar');


//constructor de usuario
class Usuario {
    constructor (nombre, usuario, email, password, img) {
        this.nombre = nombre;
        this.usuario = usuario;
        this.email = email;
        this.password = password; 
        this.img = img; 
    }
}

//crear usuario
let usuarios;

usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
console.log(usuarios);


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

    //limpiamos campos del formulario
    document.querySelector('#formulario').reset();

    //mensaje de creacion de cuenta exitosa
    msjIng.innerText = "🎉¡Cuenta creada con éxito!🎉";

})




