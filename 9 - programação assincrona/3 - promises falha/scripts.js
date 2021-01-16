let promessas = Promise.resolve(new Error("Não deu"));

console.log("sasa");

promessas.then((value) =>{console.log(value)})
.catch((reason) =>{console.log("Falhou " + reason)});