const usuarioIn = document.querySelector('#datoUsuario'),
passIn = document.querySelector('#datoPassword'),
checkboxIn = document.querySelector('#checkbox'),
ingresoIn = document.querySelector('#ingresar'),
msnIn = document.querySelector('.mensaje'),
form = document.querySelector('#formIndex');

//verificador de usuario existente o inexistente
let verificacionUsuario;
function inicioSesion(arr){
    verificacionUsuario = arr.find((usuario) => {
        return usuario.usuario === usuarioIn.value && usuario.password === passIn.value;
    });
    
    if (verificacionUsuario) {
        localStorage.setItem('verificacionUsuario', JSON.stringify(verificacionUsuario));
        location.href = "../pages/inicio.html";
    } else {
        msnIn.innerHTML = "⛔Usuario Inexistente⛔";
    }

}

//recuperamos los datos desde JSON
let usRecuperado ;
function recuperarLS(){
    usRecuperado = JSON.parse(localStorage.getItem("usuarios"));
    return usRecuperado;
}

let usuariosLS = recuperarLS();

//capturamos datos del usuario
form.addEventListener('submit', (e) => {
    e.preventDefault();
    inicioSesion(usuariosLS);
})





