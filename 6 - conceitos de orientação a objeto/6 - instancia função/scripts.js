//metodo construtor

function criaCachorro(nome,raca,patas,cor){
  let cachorro = Object.create({});
  cachorro.nome = nome;
  cachorro.raca = raca;
  cachorro.patas = patas;
  cachorro.cor = cor;
  cachorro.latir = function(){
    console.log("Latir");
  };
  return cachorro;
};

let cachorro = criaCachorro("Zeck","Poodle",4,"Branco");


console.log(cachorro);
console.log(cachorro.latir());