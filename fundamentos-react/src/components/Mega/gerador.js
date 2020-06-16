function gerarNumero(qtdNumero) {

  var numero = Array(qtdNumero)
  var verifica = new Boolean(false)

  console.log('Tamanho Vetor: ' + numero.length)
  while (numero.length < qtdNumero) {

    const numeroAleatorio = Math.floor(Math.random() * (60 - 1 + 1) + 1);

    for (i = 0; i < qtdNumero; i++) {

      if (numero[i] == numeroAleatorio) {
        verifica = false
        i = qtdNumero;
      } else {
        verifica = true
      }
    }

    if (verifica == true) {
      numero.push(numeroAleatorio)
    }
  
  }
  //ordenando o vetor
  function sortfunction(a, b){
    return (a - b) //faz com que o array seja ordenado numericamente e de ordem crescente.
  }

  numero.sort(sortfunction)
  
  return numero
}



export default gerarNumero(6)