function checarNumero(num){
  let number = Number(num);
  if(Number.isNaN(number)){
    console.log("Por favor, passe apenas numeros");
  } else{
    return number;
  }
}

checarNumero("das");
checarNumero("5");