const cep = /\d{5}-\d{3}/;

console.log(cep.test("65727-000"));
console.log(cep.test("6dsad"));

const tel = /\(\d{2}\)\d{4,5}-\d{4}/;
console.log(cep.test("(99)98151-7171"));
console.log(cep.test("(99)1234-7171"));

