const script_html = document.getElementById("script");


let num_ingresado = parseInt(prompt("ingrese un numero:"))
let fila = ''
for ( let i = num_ingresado; i >= 1 ; i-- ) {
    let num_renglon = ''
for( let j = 1 ; j <= i ; j++){

num_renglon = num_renglon + i }

fila = fila + '<p>' +  num_renglon + '</p>' }
 


script_html.innerHTML = fila