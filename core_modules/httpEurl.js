const http = require("http");

const PORT = 3000;
const server = http.createServer((req, res) => {
  const url = require("url").parse(req.url, true);
  const name = url.query.name;

  res.statusCode = 200;
  res.setHeader("contenty-type", "text/html");
  if (!name) {
    res.end(
      "<h1>preencha seu nome:</h1><form method='GET'><input type='text' name='name'/><input type='submit'value='enviar'/></form>"
    );
  } else {
    res.end(`<h1>Seja bem-vindo ${name}</h1>`);
  }
});

server.listen(PORT, () => {
  console.log(`servidor rondano na porta http://localhost:${PORT}`);
});
