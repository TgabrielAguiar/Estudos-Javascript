// escrevar um loop for ou while que exiba qual numero é par e qual numero é impar
//o contador deve inicar em 0 e ir até 50

//com while
let numeros = 0;
while(numeros <=50){
  if (numeros % 2 == 0){
    console.log(`O numero ${numeros} é par`);
  } else {
    console.log(`O numero ${numeros} é impar`);
  }
  numeros ++;
}

// com for
for(numeros = 0; numeros<=50;numeros++){
  if (numeros % 2 == 0){
    console.log(`O numero ${numeros} é par`);
  } else{
    console.log(`O numero ${numeros} é impar`);
  }
}