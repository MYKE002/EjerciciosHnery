function esNuloOIndefinido(valor) {
    // La función recibe un argumento "valor".
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Tu código:


  // Verifica si el valor es null o undefined.

  return valor === null || typeof valor === 'undefined';
}

module.exports = esNuloOIndefinido;


console.log(esNuloOIndefinido(null));         // Output: true
console.log(esNuloOIndefinido(undefined));    // Output: true
console.log(esNuloOIndefinido(42));            // Output: false
console.log(esNuloOIndefinido("Hola"));        // Output: false
console.log(esNuloOIndefinido({}));            // Output: false
