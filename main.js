//? Simulador de cajero automático

//! Ingreso el saldo mediante una varible para que el cliente sepa la cantidad limite que puede retirar.

let saldo = 10000;

//! Creo las funciones que me permitan obtener información del cliente.

function ingresarNombre() {
  let nombreIngresado = prompt("Por favor ingrese su nombre");
  console.log("Hola " + nombreIngresado + " bienvenido a tu cajero");
}

ingresarNombre();

function ingresarTarjeta() {
  let tarjetaIngresada = parseInt(
    prompt("Por favor ingrese su número de tarjeta")
  );
  console.log("Su número de tarjeta es: " + tarjetaIngresada);
  alert("Su numero de tarjeta es: " + tarjetaIngresada);
}

ingresarTarjeta();

//! Pongo una variable conteniendo una supuesta clave la cual se debe validar teniendo maximo tres itentos, lo que logro mediante un bucle for.

let clave = 1234;

function validarClave(clave) {
  let claveDeIngreso = 1234;
  for (i = 1; i <= 3; i++) {
    clave = parseInt(prompt("Ingrese su clave"));
    if (clave === claveDeIngreso) {
      alert("La contraseña es correcta");
      operacion();
      break;
    } else {
      alert("Contraseña incorrecta, vuelva a intentarlo.");
    }
  }
}

validarClave();

//! Si la clave coincide, paso a darle las opciones entre cuales elegir al cliente mediante un switch.

function operacion() {
  let op = parseInt(
    prompt("1- Ver saldo " + "2- Retirar dinero " + "3- Salir")
  );
  switch (op) {
    case 1:
      alert("Su saldo es: " + saldo);
      operacion();
      break;

    case 2:
      let dineroRetirar = parseInt(prompt("Cuanto dinero desea retirar?"));
      if (dineroRetirar <= saldo) {
        saldo = saldo - dineroRetirar;
        console.log("Usted retiró: " + "$ " + dineroRetirar);
        console.log("Su saldo restante es de " + saldo);
        alert("Operación realizada con exito");
        operacion();
      } else {
        alert("No tiene suficiente saldo");
        operacion();
      }
      break;

    case 3:
      salir();
      break;
  }
}

function salir() {
  alert("Gracias por utilizar nuestros servicios");
}
