let promessas = Promise.resolve(5);

console.log(promessas);

promessas.then( (value) =>{return value + 5}).then((value) =>{console.log(value)});
