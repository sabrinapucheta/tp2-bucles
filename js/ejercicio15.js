
const scrip_html = document.getElementById("script")

const texto_ingresado = prompt('ingrese un texto: ')
let cant_vueltas = texto_ingresado.length 
let texto_separado = ''
for ( let i = 1 ; i < cant_vueltas ; i++){

 texto_separado = texto_separado + '-' + texto_ingresado.charAt(i) 
 texto_completo = texto_ingresado.charAt(0) + texto_separado
}

scrip_html.innerHTML = texto_completo

