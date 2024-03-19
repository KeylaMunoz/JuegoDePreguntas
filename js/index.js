const usuarioIn = document.querySelector('#datoUsuario'),
passIn = document.querySelector('#datoPassword'),
checkboxIn = document.querySelector('#checkbox'),
ingresoIn = document.querySelector('#ingresar'),
msnIn = document.querySelector('.mensaje'),
form = document.querySelector('#formIndex');

//funciones
function inicioSesion(arr){
    let verificacionUsuario = arr.find((usuario) => {
        return usuario.usuario === usuarioIn.value && usuario.password === passIn.value;
    });
    
    // verificacionUsuario = console.log("correcto") ||  (msnIn.innerHTML = "Usuario Inexistente");

    if(verificacionUsuario){
        console.log("ingresaste");
        location.href= "../pages/inicio.html";
    }else{ 
        //verificar si funciona con const mensaje
        console.log("NO ingresaste");
        msnIn.innerHTML = "Usuario Inexistente";
    }

}

function recuperarLS(){
    const usRecuperado = JSON.parse(localStorage.getItem("usuarios"));
    console.log(usRecuperado);
    return usRecuperado;
}
//ejecucion de funciones
const usuariosLS = recuperarLS();
console.log(usuariosLS);


form.addEventListener('submit', (e) => { 
    e.preventDefault();
    inicioSesion(usuariosLS);
})



