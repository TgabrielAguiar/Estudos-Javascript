// antes de executar um else podemos executar um if

let nome = "Gabriel";

if(nome == undefined){
  console.log("O nome está definido");
} else if (nome == "Gabriel" && nome.length > 5){
  console.log("O nome é Gabriel");
} else{
  console.log("Não é Gabriel");
}