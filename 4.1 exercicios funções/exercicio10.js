// escreva uma função que recebe um numero e o decrementa de 1 em 1 com um loop
//além disso imprima somente os numeros pares no console;

function tiraUm(numero){
  while(numero>=0){
    if(numero % 2 ==0){
      console.log(numero);
    }
    numero--;
  };
};

tiraUm(50);