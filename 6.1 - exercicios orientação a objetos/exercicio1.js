//crie uma classe que simula uma conta no banco
//deve conter a propriedade saldo
//e os metodos deposito e saque
//teste os metodos

class ContaBanco{
  constructor(saldo){
    this.saldo = saldo;
  }

  set setDeposito(saldo){
    this.saldo = this.saldo+saldo;
  }

  set setSaque(saldo) {
    if(this.saldo-saldo >=0){
      this.saldo = this.saldo-saldo;
    } else{
      console.log("Saldo insuficiente");
    }
  }

}

conta1 = new ContaBanco(10);

conta1.setDeposito = 10;
console.log(conta1.saldo);

conta1.setSaque = 50;
conta1.setSaque = 10;
console.log(conta1.saldo);
conta1.setSaque = 10;
console.log(conta1.saldo);
