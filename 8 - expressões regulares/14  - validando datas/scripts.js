const validaData = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

console.log(validaData.test("10/10/2020"));
console.log(validaData.test("1/10/2020"));