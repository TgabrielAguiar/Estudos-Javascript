const express = require("express");
const app = express();


app.get("/", (req,res) =>{
  res.send("Primeira rota com Express");
});

app.get("/teste", (req,res) =>{
  res.send("Testando rota");
});

app.listen(8080, () =>{
  console.log("rodando na porta 8080");
});