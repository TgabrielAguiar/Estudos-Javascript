//crie uma regex que valide os endereços de ip
//ex: 127.0.0.1
//depois teste

const regex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/;

console.log(regex.test("127.0.0.1"));
console.log(regex.test("127..0.1"));
console.log(regex.test("192.168.0.1"));
console.log(regex.test("dsadsad"));
console.log(regex.test("192"));