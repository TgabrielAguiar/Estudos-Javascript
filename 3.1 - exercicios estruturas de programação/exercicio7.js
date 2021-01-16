//faça uma estrutura if/else para verificar se um usuario pode dirigir
// armazene em variaveis algumas informçãos sobre o usuario: idade, se tem CNH
// se a idade for maior que 18 e não possuir CNH, exiba uma mensagem
// se a idade for maior que 18 e tem CNH, exiba uma mensagem.
//Se não tiver 18 nem CNH exiba outra mensagem

let idade = 17;
let temCnh = false;

if(idade =>18 && temCnh == false){
  console.log("Você é maior de 18 e não possui CNH");
} else if(idade =>18 && temCnh == true){
  console.log("Você é maior de 18 e possui CNH");
} else if(idade <18 && temCnh == false){
  console.log("Você é menor de 18 e não possui CNH");
}