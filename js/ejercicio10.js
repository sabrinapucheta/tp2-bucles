
const script_html = document.getElementById ("script");
let numeros = ''
for (let i = 1; i <= 500 ; i++) {
    numeros = numeros + '<p>' +  i + '</p>'

}

script_html.innerHTML = numeros