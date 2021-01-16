const reg = /\w+: (Mateus|João|Maria)/; //Nome:  dsabffa

console.log(reg.test("Nome: Mateus"));
console.log(reg.test("Nome: Jose"));
console.log(reg.test("Nome: Maria"));