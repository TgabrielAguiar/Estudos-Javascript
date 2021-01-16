//crie uma regex que so aceite strings terminadas com ID
//depois teste

const regex = /\w+id/;

console.log(regex.test("dasdid"));
console.log(regex.test("dasd"));