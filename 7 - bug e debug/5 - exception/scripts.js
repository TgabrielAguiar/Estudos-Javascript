function saudacao(nome){
  if(typeof nome != "string"){
    throw new Error("O nome precisa ser string");
  } else{
    console.log(`Oi ${nome}`)
  }
}

saudacao("Gabriel");
saudacao(5);

console.log("Teste");