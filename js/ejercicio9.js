
const script_html = document.getElementById("script");
let numeros = ''
for (let i= 1 ; i<= 500 ; i++) {


 if ( (i % 4) === 0) {
    numeros = '<p>' + numeros + i + ' (Multiplo de 4) </p>'
 } else if ((i % 5) === 0){

    numeros = '<p>' + numeros + i + '</p> <p> ------------------ </p>'


 } else {
    numeros = '<p>' + numeros + i + '</p>'
 }

}

script_html.innerHTML = numeros