//atrelando metodo ao prototype
//classes apenas pras propriedades e prototype com os metodos

function Cachorro(nome,raca,patas,cor){
  this.nome = nome;
  this.raca = raca;
  this.patas = patas;
  this.cor = cor;
};

Cachorro.prototype.uivar = function(){
  console.log("Auuuuuuuuuu!")
}

Cachorro.prototype.latir = function(){
  console.log("Au au!")
}

let cachorro1 = new Cachorro("Zeck","Poodle",4,"Branco");

console.log(cachorro1);

cachorro1.uivar();
cachorro1.latir();