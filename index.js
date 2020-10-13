
alert ("Bienvenidos a mi sitio");
let confirmacion = confirm ("Esta seguro de querer avanzar?");
titulo = document.querySelector(".titulo");
if (confirmacion == false) {titulo.innerHTML ="Lamentamos que no quieras continuar tu visita por este sitio increíble"}
  else if (confirmacion == true) {titulo.innerHTML ="¡Qué alegría que quieras seguir con tu visita por este maravilloso sitio!" 
  nombre = prompt ("ingrese su nombre"); }

  saludo = document.querySelector(".saludar");
  saludo.innerHTML = "Bienvenido " + nombre;

  edad = prompt ("ingrese su edad");
  if (edad <18) {acceso = alert("prohibido su acceso")}
  else if (edad>=18){acceso = alert("permitido su acceso"); oscuro = confirm("deseas cambiar a modo oscuro?")
  let body = document.querySelector("body")
 
if (oscuro == true) {body.style.backgroundColor = "dimgray";body.style.color = "white"}

  diaDeSemana = ("Domingo")
  if (diaDeSemana = "Domingo"){alert("Hoy es dia de descanso!")} }


  
  
  
  
  
 
  
 


