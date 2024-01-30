function divide(x, y) {
  // La función recibe dos argumentos "x" e "y" que son números.
  // Retorna el resultado de su división.
  // Tu código:
  if (y !== 0) {
    return x / y;
  } else {
    console.log("Error: División por cero no permitida");
  }
}
const resultado = divide(9, 2);
console.log(resultado);
module.exports = divide;