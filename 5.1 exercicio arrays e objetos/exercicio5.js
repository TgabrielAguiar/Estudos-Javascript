//crie um array com 5 nomes, incluindo o seu
//verifique se seu nome existe no array
//se existir imprima alguma mensagem no console.

let nomes = ["Rafael","Ryan", "Tayane","Gabriel", "Juliana"];


// if(nomes.indexOf("Gabriel") != -1){
//   console.log("Gabriel está na lista");
// } else{
//   console.log("Gabriel não está na lista");
// }

if(nomes.includes("Gabriel")){
  console.log("Gabriel está na lista");
} else{
  console.log("Gabriel não está na lista");
}