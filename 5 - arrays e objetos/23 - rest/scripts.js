//transforma o parametro num array

let num =1;
let num1 = 5;
let num2 = 3;
let num3 = 4;

function imprimirNumeros(...args){
  for(let i =0; i < args.length; i++){
    console.log(args[i]);

  }
};

imprimirNumeros(num,num1,num2,num3);
console.log("Pausa");
imprimirNumeros(num2,num3);
console.log("Pausa");
imprimirNumeros(2,6,9,8,4,15,44,6,84,2);