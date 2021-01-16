const notab = /[^ab]/;

console.log(notab.test("a"));
console.log(notab.test("Aqui tem a"));
console.log(notab.test("b"));

const notaaz = /[^a-z]/;
console.log(notaaz.test("dsad"));