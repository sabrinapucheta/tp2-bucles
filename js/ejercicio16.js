
const script_html = document.getElementById("script")

let texto_ingresado = prompt("ingrese un texto: ")
let cant_vueltas = texto_ingresado.length
let texto_al_revez = ''

for ( let caract = 0; caract < cant_vueltas; caract++){
    
     texto_al_revez =  texto_ingresado.charAt(caract) + texto_al_revez

}

script_html.innerHTML = texto_al_revez
