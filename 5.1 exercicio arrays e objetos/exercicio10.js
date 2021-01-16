//crie uma um objeto calculadora.
//que tem os seguintes metodos: somar,subtrair,multiplicar e dividir.
//os metodos so devem aceitar dois parametros,
//utilize cada um dos metodos e imprima os valores no console.

let calculadora = {
  somar: function(a,b){
    console.log(`A soma de ${a} + ${b} é igual a: ${a+b} `);
  },
  subtrair: function(a,b){
    console.log(`A subtração de ${a} - ${b} é igual a: ${a-b} `);
  },
  multiplicar: function(a,b){
    console.log(`A multiplicação de ${a} * ${b} é igual a: ${a*b} `);
  },
  dividir: function(a,b){
    console.log(`A divisão de ${a} / ${b} é igual a: ${a/b} `);
  }
};

calculadora.somar(2,2);
calculadora.subtrair(2,2);
calculadora.multiplicar(2,2);
calculadora.dividir(2,2);