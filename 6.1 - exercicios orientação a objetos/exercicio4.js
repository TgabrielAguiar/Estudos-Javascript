//crie uma classe que simule um carro
//propriedades: marca, cor, gasolina restante;
//crie um metodo de dirigir o carro que vá diminuindo a gasolina gradativamente
//e um de abastecer para aumentar a gasolina quando necessario

class Carro{
  constructor(marca,cor,gasolinaRest){
    this.marca = marca;
    this.cor = cor;
    this.gasolinaRest = gasolinaRest;
  }

  get dirigir(){
    if(this.gasolinaRest<=0){
      console.log("Impossivel dirigir, sem gasolina.")
    }else{
      for(let i =this.gasolinaRest; i>=0;i -=10){
        if(i == 0){
          console.log("Carro parado, sem gasolina");
        } else{
          console.log(`Dirigindo, gasolina restante ${i}%`);
        }
        
      }
    }
  }

  set abastecer(gasolina){
    this.gasolinaRest = gasolina
  }
}

carro1 = new Carro("Fiat", "Vermelho",100);

carro1.dirigir;
carro1.abastecer = 100;
carro1.dirigir;