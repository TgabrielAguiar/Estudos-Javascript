//usando construtor dentro da classe

class Cachorro{
  constructor(nome,raca,cor){
    this.nome = nome;
    this.raca = raca;
    this.cor = cor;
  };

  latir(){
    console.log("Auau");
  };
};

Cachorro.prototype.patas = 4;

let cachorro1 = new Cachorro("Huld","SRD","Caramelo");

console.log(cachorro1.patas);

console.log(cachorro1.latir());