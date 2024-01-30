function sonIguales(x, y) {
  // La función recibe dos argumentos "x" e "y".
  // Retorna true si "x" e "y" son iguales.
  // De lo contrario, retorna false.
  // Tu código:
  if(x === y){
    console.log("Son iguales");
  }else{
    console.log("No son iguales");
  }
}

module.exports = sonIguales;
sonIguales(2, 3);