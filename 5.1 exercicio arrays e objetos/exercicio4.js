//adicione a propriedade janelas no onibus com valor de 20
//delete a propriedade rodas
//imprima a propriedade janelas no console
let onibus = {
  rodas: 8,
  limiteDePassageiros: 40,
  portas: 2
};

onibus.janelas = 20;

delete onibus.rodas;

console.log(onibus.rodas);

console.log(onibus.janelas);

