function esPar(num) {
  // Retorna true si "num" es par.
  // De lo contrario, retorna false.
  // Tu código:
  if (num % 2 === 0){
    console.log("true");
  }else{
    console.log("false");
  }
}
esPar(8);

module.exports = esPar;
