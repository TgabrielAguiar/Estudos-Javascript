function verificarNumero(num){
  return new Promise((resolve,reject) =>{
    if(num ==2){
      resolve(`O numero é ${num}`);
    } else{
      reject(new Error("Falhou"));
    }
  });
  
}


console.log(verificarNumero(2));
console.log(verificarNumero(3));