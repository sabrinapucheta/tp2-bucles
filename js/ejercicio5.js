const script_html = document.getElementById("script");

let num_dni = 0;
let resto_dni = 0;

do {
  let num_dni = parseInt(prompt("Ingrese su numero de DNI: "));
  if (num_dni < 0 || num_dni > 99999999) {
    prompt(
      "el dato ingresado no es valido, por favor ingrese un numero entre 0 y 99999999:",
    );
  } else if (isNaN(num_dni)) {
    alert("solo se pueden ingresar numeros entre 0 y 99999999");
  } else {
    resto_dni = num_dni % 2;

    switch (resto_dni) {
      case 0:
        alert("su letra es: T");
        break;
      case 1:
        alert("su letra es: R");
        break;
      case 2:
        alert("su letra es: W");
        break;
      case 3:
        alert("su letra es: A");
        break;
      case 4:
        alert("su letra es: G");
        break;
      case 5:
        alert("su letra es: M");
        break;
      case 6:
        alert("su letra es: Y");
        break;
      case 7:
        alert("su letra es: F");
        break;
      case 8:
        alert("su letra es: P");
        break;
      case 9:
        alert("su letra es: D");
        break;
      case 10:
        alert("su letra es: X");
        break;
      case 11:
        alert("su letra es: B");
        break;
      case 12:
        alert("su letra es: N");
        break;
      case 13:
        alert("su letra es: J");
        break;
      case 14:
        alert("su letra es: Z");
        break;
      case 15:
        alert("su letra es: S");
        break;
      case 16:
        alert("su letra es: Q");
        break;
      case 17:
        alert("su letra es: V");
        break;
      case 18:
        alert("su letra es: H");
        break;
      case 19:
        alert("su letra es: L");
        break;
      case 20:
        alert("su letra es: C");
        break;
      case 21:
        alert("su letra es: K");
        break;
      case 22:
        alert("su letra es: E");
        break;
    }
  }
} while (confirm("desea seguir ingresando datos?"));
