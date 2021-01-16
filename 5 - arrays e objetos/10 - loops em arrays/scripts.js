let nomes = ["Gabriel", "Maria", "José"];

for(let i = 0; i<=nomes.length-1; i++){
  console.log(nomes[i]);
};

//Faça um programa que leia um vetor numérico de 10 posições. Depois, ordene o vetor em ordem crescente e apresente os elementos ordenados.
let vet = [1,0,5,3,8,9,1,8,15];

vet.sort(function(a, b){
  return a > b;
});

console.log(vet);