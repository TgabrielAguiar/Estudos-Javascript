//função se chama novamente
//não usar quando não for realmente necessario
//chamar diversas vezes a mesma função pode causar perda de desempenho

function recursao(n){
  if(n-1 <= 2){
    console.log(n + " Recursão parou");
  } else if(n%2 != 0){
    console.log(n + " Numero impar");
    recursao(n-1);
  } else{
    console.log(n + " Numero par");
    recursao(n-2);
  }
}

recursao(54);
recursao(33);
recursao(20);