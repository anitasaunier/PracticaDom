window.onload = function () {

alert("bienvenidos a mi sitio");
let confirmacion = confirm("esta seguro de querer avanzar?")
let titulo = document.querySelector(".titulo");
if(confirmacion == false){
    titulo.innerHTML = "Lamentamos que no quieras continuar tu visita por este sitio increíble."

} else{
titulo.innerHTML = "¡Qué alegría que quieras seguir con tu visita por este maravilloso sitio!"


} 

let nombre = prompt("ingresa tu nombre");
let saludo = document.querySelector("h1");
saludo.innerHTML = "hola " + nombre

let edad = prompt("ingresa tu edad")
if (edad >= 18)

 

 



let modooscuro = confirm("deseas cambiar a modo oscuro?")
let body = document.querySelector("body")

if(modooscuro == true){
    body.style.backgroundColor = "dimgray"
    body.style.color = "white"
}

let diaDeSemana = "Domingo"
if (diaDeSemana == "Domingo") {
    console.log("¡Hoy es día de descanso!")
}



