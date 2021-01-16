let idade = 19;

if(idade == 19){
  console.log("A idade é igual a 19");
}

// não entra pois não atende a condição
if(idade > 25) {
  console.log("A idade é maior que 25");
}

let nome = "Gabriel";

if (nome == "Gabriel" && idade > 10){
  console.log("Liberado");
}

let passarporte = true;

if (nome == "Gabriel" && idade > 10 || passarporte == true){
  console.log("Liberado 2");
}