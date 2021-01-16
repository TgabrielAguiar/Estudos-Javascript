let pessoa = {
  nome: "Gabriel",
  idade: 21,
  profissao: "Programador",
};

console.log(pessoa.nome);

delete pessoa.nome;

console.log(pessoa.nome);

console.log(pessoa);

pessoa.casado = false;

console.log(pessoa.casado);
console.log(pessoa);
