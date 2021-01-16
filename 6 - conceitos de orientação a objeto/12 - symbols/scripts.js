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
};

Cachorro.prototype.raca = "SRD";

let patas = Symbol();

Cachorro.prototype[patas] = 4;

let cachorro1 = new Cachorro("Huld","Fila","Caramelo");

console.log(cachorro1.patas);

console.log(cachorro1.latir());

console.log(Cachorro.prototype.raca);

console.log(cachorro1.raca);

//acessando patas

console.log(Cachorro.prototype[patas]);

console.log(cachorro1[patas]);