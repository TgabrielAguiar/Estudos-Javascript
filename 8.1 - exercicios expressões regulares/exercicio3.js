// crie uma regex que aceite a seguinte expressão "Marca: nomeDaMarca";
//onde nomeDamarca pode variar para Nike,Adidas,Puma,Asics
//depois teste

const regex = /Marca:+ (Nike|Adidas|Puma|Asics)/;

console.log(regex.test("Marca: Adidas"));
console.log(regex.test("Marca: Zimbra"));
console.log(regex.test("Marca: Puma"));