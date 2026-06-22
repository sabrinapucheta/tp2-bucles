

const edad = parseInt(prompt("Ingrese su edad: "));
if (isNaN(edad)) {
    alert("el dato ingresado no es valido, por favor ingrese un numero valido");
}
if (edad >= 18) {
    alert("Usted es mayor de edad, ya puede conducir");
} else if (edad < 18) {
    alert("Usted es menor de edad, no puede conducir");
}
