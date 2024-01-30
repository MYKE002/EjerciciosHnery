function esNumeroEntero(numero) {
  // La función recibe un argumento "numero".
  // Verifica si este es un número entero o no.
  // Returna true si lo es, de lo contrario, retorna false.
  // Tu código:
  return typeof numero === 'number' && numero % 1 === 0;

}

module.exports = esNumeroEntero;
console.log(esNumeroEntero(15)); //salida: verdadero
console.log(esNumeroEntero(11.2)); //salida: falso