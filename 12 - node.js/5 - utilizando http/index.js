const {createServer} = require("http");

let server = createServer((request,response) =>{
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(`
  <h1>Hello World!</h1>
  <p>Primeira página com Node.js</p>
  `);
  response.end();
});

server.listen(8080, () =>{
  console.log("Rodando na porta 8080");
});