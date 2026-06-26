
const script_html = document.getElementById ("script");

let nombre = prompt('escribi el nombre de un amigo:')
let edad = parseInt( prompt('cuantos años tiene?'))

let nombre_a = prompt('escribi el nombre de otro amigo:')
let edad_a =parseInt( prompt('cuantos años tiene?'))

let nombre_b =(prompt('escribi el nombre de un tercer y ltimo amigo:'))
let edad_b = parseInt(prompt('cuantos años tiene?'))

let edad_amigo_mayor = Math.max ( edad, edad_a, edad_b)

if (edad_amigo_mayor === edad){
script_html.innerHTML = 'tu amigo ' + nombre + 'es el mayor, tiene '+  edad_amigo_mayor
}else if (edad_amigo_mayor === edad_a){
    script_html.innerHTML = 'tu amigo ' + nombre_a + 'es el mayor, tiene '+  edad_amigo_mayor

}else{
    script_html.innerHTML = 'tu amigo ' + nombre_b + ' es el mayor, tiene '+  edad_amigo_mayor

}
