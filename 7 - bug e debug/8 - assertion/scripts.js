let arr = [1,2,3,4,5];
let arr2 = [];

function iterarArray(array){
  if(array.length ==0){
    throw new Error("O array precisa ter elementos");
  } else{
    for(let i =0; i < array.length; i++){
      console.log(i);
    }
  }
}

iterarArray(arr);


