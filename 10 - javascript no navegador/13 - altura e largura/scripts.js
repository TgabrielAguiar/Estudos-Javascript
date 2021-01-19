let elemento = document.getElementById("titulo-principal");

console.log(elemento.offsetWidth); //considera bordas
console.log(elemento.offsetHeight);


console.log(elemento.clientWidth); //não considera bordas
console.log(elemento.clientHeight);