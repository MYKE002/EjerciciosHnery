function esImpar(num) {
  // Retorna true si "num" es impar.
  // De lo contrario, retorna false.
  // Tu código:
  if(num % 2 === 0){
    console.log("false");
  }else{
    console.log("true");
  }
}

esImpar(6);

module.exports = esImpar;