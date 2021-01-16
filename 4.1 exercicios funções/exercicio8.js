//escreva uma função que recebe uma string
//se o texto conter mais de 10 caracteres imprime "Texto muito longo";
//se conter menos, imprima "Texto dentro do limite"

function recebeString(string){
  if(string.length >10){
    return "Texto muito longo";
  } else{
    return "Texto dentro do limite";
  }
};

console.log(recebeString("oi"));
console.log(recebeString("oioioioioooioiooio"));