const pontoRegex = /./;

console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("123"));
console.log(pontoRegex.test("123sad"));
console.log(("//"));

const dRegex = /\d/; //[0-9]
console.log(dRegex.test("asd"));
console.log(dRegex.test(" "));
console.log(dRegex.test("123"));
console.log(dRegex.test("123sad"));
console.log(("//"));

const dRegex2 = /\D/; //[^0+9] 
console.log(dRegex2.test("asd"));
console.log(dRegex2.test(" "));
console.log(dRegex2.test("123"));
console.log(dRegex2.test("123sad"));
console.log(("//"));


const sRegex = /\s/; //espaços
console.log(sRegex.test("asd"));
console.log(sRegex.test(" "));
console.log(sRegex.test("123"));
console.log(sRegex.test("123sad"));
console.log(("//"));

const sRegex1 = /\S/; //sem espaços
console.log(sRegex1.test("asd"));
console.log(sRegex1.test(" "));
console.log(sRegex1.test("123"));
console.log(sRegex1.test("123sad"));
console.log(("//"));

const wRegex = /\w/; //so numeros e letras
console.log(sRegex1.test("asd"));
console.log(sRegex1.test(" "));
console.log(sRegex1.test("123"));
console.log(sRegex1.test("123sad"));
console.log(("//"));
