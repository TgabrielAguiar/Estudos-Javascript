// escreva uma função que retorne um numero aleatorio
// o numero maximo retornado deve ser passado via parametro

function numeroAleatorio(maior){

  return Math.floor(Math.random() * maior) +1 ;
};

console.log(numeroAleatorio(5));