function obtenerResto(x, y) {
  // La función recibe dos argumentos "x" e "y" que son números.
  // Obten el resto de la división de "x" entre "y".
  // Tu código:
  if (y !== 0) {
    return x % y;
  } else {
    console.log("Error: División por cero no permitida");
  }
}
const resto = obtenerResto(9, 2);
console.log(resto);
module.exports = obtenerResto;