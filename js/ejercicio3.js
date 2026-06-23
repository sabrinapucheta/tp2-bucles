
let texto_ingresado = "";
let cadena_texto_ingresado = "";
do {
    let texto_ingresado = prompt("Ingrese un texto: ")
    cadena_texto_ingresado = cadena_texto_ingresado + texto_ingresado
} while (confirm("Desea ingresar otro texto?"))
    document.write(`El texto ingresado es: ${cadena_texto_ingresado}`);
    