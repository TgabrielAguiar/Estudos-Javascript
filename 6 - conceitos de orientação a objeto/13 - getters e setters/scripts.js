//é uma constante para objetos

class Cachorro{
  constructor(nome,raca,cor){
    this.nome = nome;
    this.raca = raca;
    this.cor = cor;
  };

  latir(){
    console.log("Auau");
  };

  get getCor(){
    return this.cor;
  }
  
  set setCor(cor){
    this.cor = cor;
  }
};

let cachorro1 = new Cachorro("Zeck","Poodle","Sem cor");

console.log(cachorro1);

cachorro1.setCor = "Vermelho";

console.log(cachorro1.getCor);
console.log(cachorro1);