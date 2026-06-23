
const script_html = document.getElementById("script");

const num_dni = parseInt(prompt("Ingrese su numero de DNI: "));

let resto_dni = 0;
do  {
    if (num_dni < 0 || num_dni > 99999999) {
    alert("el dato ingresado no es valido, por favor ingrese un numero de DNI valido")
    prompt("Ingrese su numero de DNI: ")
} else {
    resto_dni = num_dni % 2

   switch (resto_dni) {
    case 0:
        alert("su letra es: T")
        break;
    case 1:
        alert("su letra es: R")
        break;
    case 2: 
        alert("su letra es: W")
        break;

   }
}
} while(confirm(desea seguir ingresando datos?))

    
