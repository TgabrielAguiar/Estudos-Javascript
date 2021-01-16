class Mamifero {
  constructor(patas){
    this.patas = patas;
  }
}

class Cachorro extends Mamifero{
  constructor(patas,raca){
    super(patas,patas);
    this.raca = raca;
 
  }

  latir(){
    console.log("Au au");
  }
}


console.log(new Cachorro instanceof Mamifero);
