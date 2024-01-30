function esMayorDeEdad(fechaNacimiento) {
  // Si fechaNacimiento no es un objeto Date, asumimos que es el año de nacimiento
  const fechaNacimientoObj = fechaNacimiento instanceof Date ? fechaNacimiento : new Date(fechaNacimiento, 0);

  // Obtener el año de nacimiento de la fechaNacimiento
  const añoNacimiento = fechaNacimientoObj.getFullYear();

  // Obtener la fecha actual
  const fechaActual = new Date();

  // Obtener el año actual
  const añoActual = fechaActual.getFullYear();

  // Calcular la edad restando el año de nacimiento del año actual
  const edad = añoActual - añoNacimiento;

  // Verificar si la persona es mayor de edad (18 años o más)
  return edad >= 18;
}

// Ejemplo de uso
console.log(esMayorDeEdad(2002));  // Devolverá true o false dependiendo de la edad actual
