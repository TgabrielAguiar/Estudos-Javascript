//escreva uma função que detecta o tipo de dado passado
// verifique o tipo
//retorne uma mensagem para cada tipo
//execute uma função para cada caso

function detectaTipo(dado){
  return console.log(`O tipo de dado é ${(typeof dado)}`);
};

detectaTipo(10);
detectaTipo("10");
detectaTipo(true);