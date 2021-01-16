//crie uma regex que valide nome de usuarios no sistema;
//aceita letras de a-z,_ e -, numeros de 0-9, no minimo de 3 caracteres e no maximo de 16;
//depois teste

const regex = /^(?=.{3,16}$)[a-z0-9-]/;

console.log(regex.test("gabri_212"));
console.log(regex.test("12"));
console.log(regex.test("gabriel621aaaaaaaaaaaaaaaaa2"));