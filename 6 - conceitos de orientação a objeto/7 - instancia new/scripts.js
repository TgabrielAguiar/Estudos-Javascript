//instanciando com new
//classe começa com letra maiuscula

function Cachorro(nome,raca,patas,cor){
  this.nome = nome;
  this.raca = raca;
  this.patas = patas;
  this.cor = cor;
  this.uivar = function(){
    console.log("Auuuuuuuuuu!")
  };
};

let cachorro1 = new Cachorro("Zeck","Poodle",4,"Branco");

console.log(cachorro1);

cachorro1.uivar();