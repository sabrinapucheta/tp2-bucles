
const script_html = document.getElementById("script");
let num_ingresado = parseInt(prompt('ingrese un numero:'))
let fila = ''
let num_fila = ''
for (let i = 1; i <= num_ingresado ; i++){

    num_fila = num_fila + i

    fila = fila + '<p> ' +  num_fila  + '</p>'
    
}

script_html.innerHTML = fila