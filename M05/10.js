function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  const dateObject = new Date(fecha);

  // Verificar si el objeto Date es válido y si la fecha es igual a la fecha original.
  return !isNaN(dateObject.getTime()) && dateObject.toISOString().slice(0, 10) === fecha;
}

module.exports = esFechaValida;

console.log(esFechaValida('2022-01-22'));   // Output: true
console.log(esFechaValida('2022-13-01'));   // Output: false (invalid month)
console.log(esFechaValida('2022-01-32'));   // Output: false (invalid day)
console.log(esFechaValida('invalid-date')); // Output: false (invalid date format)
