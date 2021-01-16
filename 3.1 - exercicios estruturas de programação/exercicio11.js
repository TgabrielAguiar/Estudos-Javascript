// verifique se um numero primo
// um numero primo é um numero natural, maior que 1 e apenas por si e por 1
let numero = 8;

let divisoes = 0;

for(let i =1; i<=numero; i++){
  if(numero % i == 0){
    divisoes++;
  }
}

if(divisoes == 2){
  console.log(`O numero ${numero} é primo`);
} else{
  console.log(`O numero ${numero} não é primo`);
}