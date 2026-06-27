const script_html = document.getElementById('script')
let texto_ingresado = prompt('ingresa un texto:')
let cant_vueltas = texto_ingresado.length
let vocal = ''

while ( texto_ingresado.charAt(cant_vueltas) == "a"||
 texto_ingresado.charAt(cant_vueltas) == 'e'||
 texto_ingresado.charAt(cant_vueltas) =='i'||
 texto_ingresado.charAt(cant_vueltas) =='o'||
 texto_ingresado.charAt(cant_vueltas) =='u'){

    vocal = texto_ingresado.charAt(cant_vueltas)
    cant_vueltas = cant_vueltas - 1
 }

 script_html.innerHTML = vocal