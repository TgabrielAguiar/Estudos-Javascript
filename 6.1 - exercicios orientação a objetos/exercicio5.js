//crie uma classe conta bancaria
//com as propriedades de saldo na conta corrente, saldo na conta poupança e juros da poupança
//crie os metodos de deposito e saque, tambem um metodo para transferir dinheiro da poupança para a conta corrente;
//alem disso crie uma conta especial que herda da conta normal
// na conta especial os juros são dobrados da conta normal

class Conta{
  constructor(saldoCorrente,saldoPoupanca,jurosPoupanca){
    this.saldoCorrente = saldoCorrente;
    this.saldoPoupanca = saldoPoupanca;
    this.jurosPoupanca = jurosPoupanca = 1.5;
  }

   set depositoCorrente(deposito){
    this.saldoCorrente += deposito;
  }

  set depositoPoupanca(deposito){
    this.saldoPoupanca += deposito;
  }

  set saqueCorrente(saque){
    this.saldoCorrente-=saque;
  }

  set saquePoupanca(saque){
    this.saldoPoupanca-=saque
  }

  set transfere(valor){
    this.saldoPoupanca -=valor ;
    this.saldoCorrente += valor;
  }


}

conta1 = new  Conta(1500,2000);
console.log(conta1);

conta1.depositoCorrente = 500;
console.log(conta1);

conta1.saqueCorrente = 500;
console.log(conta1);

conta1.transfere = 100;
console.log(conta1);

class ContaEspecial extends Conta{
  constructor(jurosPoupanca){
    super(jurosPoupanca,jurosPoupanca);
    this.jurosPoupanca = jurosPoupanca =3;
  }
}

contaEsp = new  ContaEspecial(100,500);

console.log(contaEsp);

contaEsp.depositoCorrente = 500;
console.log(contaEsp);

contaEsp.saqueCorrente = 500;
console.log(contaEsp);

contaEsp.transfere = 100;
console.log(contaEsp);