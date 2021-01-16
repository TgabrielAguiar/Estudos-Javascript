const validaEmail = /\w+@\w+\.\w+/;

console.log(validaEmail.test("gabriel@mail.com"));
console.log(validaEmail.test("gabriel@mail"));
console.log(validaEmail.test("mai.com"));
console.log(validaEmail.test("gabriel@mail.com.br"));