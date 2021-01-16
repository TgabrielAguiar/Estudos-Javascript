// escreva uma função que recebe a idade de uma pessoa
//se ela tem mais de 18 anos ela pode entrar na auto escola, imprima uma mensagem informando isso
//se ela tem menos, ela não pode, imprima outra mensagem com esse aviso
//execute a função nos dois acasos

function recebeIdade(idade){
  if(idade >= 18){
    return console.log("Maior de idade, pode entrar");
  } else{
    return console.log("Menor de idade, não pode entrar");
  }
};

recebeIdade(18);
recebeIdade(16);