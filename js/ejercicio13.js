
const script_html = document.getElementById("script")

const textoIngresado = (prompt('escribi un texto:'))
const textoMayuscula = textoIngresado.toUpperCase()

script_html.innerHTML = textoMayuscula