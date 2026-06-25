
const script_html = document.getElementById("script");
let piramide = ''
   

for ( let i= 0 ;  i < 31 ; i++ ) {
   let num_piramide = ''
     for( let j = 0 ; j < i ; j++){
  
     num_piramide =  num_piramide +  i}

  piramide = piramide + '<p>' + num_piramide + '</p>' }

script_html.innerHTML = piramide