let pessoa = {
  "nome": "Gabriel",
  "idade": 19,
  "profissao": "Programador",
  "hobbies": ["Video-game", "Leitura", "Correr"]
};

//transfroma json em string
let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoa);
console.log(pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto);
console.log(pessoaJSON);

console.log(pessoaJSON.hobbies[0]);
