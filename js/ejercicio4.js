
let num_ingresado = 0;
let suma_num_ingresado = 0;

do { num_ingresado = parseInt(prompt("Ingrese un numero: "))
    if (isNaN(num_ingresado)) {
        alert("el dato ingresado no es valido, por favor ingrese un numero");
    } else {
        suma_num_ingresado = suma_num_ingresado + num_ingresado;
    }

} while (confirm("Desea ingresar otro numero?"))
    document.write(`La suma de los numeros ingresados es: ${suma_num_ingresado}`);