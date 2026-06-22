
const nota = parseInt(prompt("Ingrese su nota: "));
if (isNaN(nota)) {
    alert("el dato ingresado no es valido, por favor ingrese un numero valido");
} else if (nota < 0 || nota > 10) {
    alert("La nota ingresada no es valida! recuerde que se califica del 1 al 10");}
    if (nota >= 0 && nota <= 2) { alert("muy deficiente"); }
    if (nota > 2 && nota <= 4) { alert("insuficiente"); }
    if (nota > 4 && nota <= 6) { alert("suficiente"); }
    if (nota > 6 && nota <= 8) { alert("bien"); }
    if (nota > 8 && nota <= 9) { alert("notable"); }
    if (nota > 9 && nota <= 10) { alert("sobresaliente"); }               
    