//usando construtor dentro da classe

class Cachorro{
  constructor(nome,raca,patas,cor){
    this.nome = nome;
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
  };
};

let cachorro1 = new Cachorro("Huld","SRD",4,"Caramelo");

console.log(cachorro1);