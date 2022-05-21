/*
Problema: Autos de Carrera

•En una prueba, un piloto tiene que completar 4
vueltas
•Se necesita un programa que permita ingresar
por teclado el tiempo de cada vuelta
•El programa debe retornar el tiempo total y el
promedio de vuelta
*/

let primerVuelta: number = Number(
  prompt("Ingrese el tiempo de la primer vuelta")
);
let segundaVuelta: number = Number(
  prompt("Ingrese el tiempo de la segunda vuelta")
);
let terceraVuelta: number = Number(
  prompt("Ingrese el tiempo de la tercera vuelta")
);
let cuartaVuelta: number = Number(
  prompt("Ingrese el tiempo de la cuarta vuelta")
);

let tiempoTotal: number =
  primerVuelta + segundaVuelta + terceraVuelta + cuartaVuelta;
let promedio: number = tiempoTotal / 4;

console.log("El tiempo total de las vueltas es: " + tiempoTotal);
console.log("El promedio de las vueltas es: " + promedio);
