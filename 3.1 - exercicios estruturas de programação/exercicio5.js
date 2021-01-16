// armazene a velocidade de um carro em uma varivel, com o numero que desejar;
// faça uma estrutura if/else que verifica se ele está acima da velocidade
// 80 é a velocidade maxima permitida
// se estiver acima ou abaixo exiba as mensagens com o console log.

let velocidade = 20;

if(velocidade == 80){
  console.log(`Velocidade ${velocidade}km/h o maximo permitido`);
} else if(velocidade<80){
  console.log(`Velocidade ${velocidade}km/h dentro do permitido`);
} else {
  console.log(`Velocidade ${velocidade}km/h acima do permitido`);
}