const reg1 = /[12345]/;

console.log(reg1.test("Tem o numero 6?"));
console.log(reg1.test("Tem o numero 2?"));
console.log(reg1.test("Tem o numero 23?"));
console.log(reg1.test("Tem o numero 25?"));
console.log(reg1.test("Tem o numero 60?"));

const reg2 = /[0-9]/;
console.log(reg2.test("Temos o numero 165080603136498"));
console.log(reg2.test("Temos o numero"));
