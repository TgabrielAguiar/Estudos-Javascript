//crie dois arrays, um com mais de 5 elemento e um com menos
//faça uma função que verifica o numero de elementos
//se possuir menos que 5, imprima "Poucos elemtnos no console"
// se tiver mais imprima muitos elementos.

let array1 = [1,5,8,9,7,5,8];
let array2 = [1,5,8,9];

function verificaElementos(array){
  if(array.length >=5){
    console.log("Muitos elementos");
  } else{
    console.log("Poucos elementos.");
  }
}

verificaElementos(array1);
verificaElementos(array2);