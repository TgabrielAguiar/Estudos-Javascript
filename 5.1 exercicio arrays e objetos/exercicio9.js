//crie um array a partir de uma frase
//imprima cada palavra do array no console por meio de um for

const frase = "Oi, tudo bem com você?";
const array = frase.split(" ");

console.log(array);

for(let i =0; i< array.length; i++){
  console.log(array[i]);
}