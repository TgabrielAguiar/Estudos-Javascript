let nome = "Gabriel";
for(let i = 0; i<10; i++){
  
  if(i ==3){
    nome = "João";
    console.log(nome);
  }

  if (i ==5 && nome =="João") {
    console.log("Nome João, pode parar");
    break;
  }
  console.log(i);
}

// usado para quebrar o loop antes que complete o ciclo
