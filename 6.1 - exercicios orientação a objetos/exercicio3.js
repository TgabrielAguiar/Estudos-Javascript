// crie uma classe que simula um endereço de um cliente
//propriedades: Rua, Bairro, cidade e estado;
//no construtor o endereço já deve ser definido por completo
//crie metodos para atualizar todas as propriedades

class Endereco{
  constructor(rua,bairro,cidade,estado){
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
  }

  set atualizaRua(rua){
    this.rua = rua;
  }

  set atualizaBairro(bairro){
    this.bairro = bairro;
  }

  set atualizaCidade(cidade){
    this.cidade = cidade;
  }

  set atualizaEstado(estado){
    this.estado = estado;
  }
}

endereco1 = new Endereco("Nova rua","Centro","Trizidela do Vale", "Maranhão");
endereco2 = new Endereco();

console.log(endereco1);
endereco1.atualizaRua = "Rua Nova";
console.log(endereco1);

console.log(endereco2);
endereco2.atualizaRua = "Rua da Golada";
endereco2.atualizaBairro = "Centro";
endereco2.atualizaCidade = "Pedreiras";
endereco2.atualizaEstado = "Maranhão"
console.log(endereco2);