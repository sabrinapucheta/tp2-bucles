
const script_html = document.getElementById("script")
const texto_ingresado = prompt('ingrese un texto?')
let cant_letras = texto_ingresado.length
let cant_vocales = 0

for ( let caract = 0 ; caract < cant_letras ; caract++ ) {
    let texto_caracter = texto_ingresado.charAt(caract)
    if (texto_caracter === 'a' || texto_caracter === 'e'|| texto_caracter === 'i'|| texto_caracter ==='o'|| texto_caracter === 'u'||texto_caracter === 'A'|| texto_caracter === 'E'|| texto_caracter === 'I'|| texto_caracter === 'O'|| texto_caracter === 'U') {
    cant_vocales = cant_vocales + 1
    }
}



script_html.innerHTML = cant_vocales


