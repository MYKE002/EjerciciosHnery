function combinarNombres(nombre, apellido) {
  // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
  // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
  // Tu código:
  combi = (nombre + " " + apellido);
  console.log(combi);
}
combinarNombres("Soy", "Henry");

module.exports = combinarNombres;
