const http = require("http");

const PORT = 3000;
const server = http.createServer((_req, res) => {
  res.statusCode = 200;
  res.setHeader("contenty-type", "text/html");
  res.end("<h1>ii</h1>");
});

server.listen(PORT, () => {
  console.log(`servidor rondano na porta http://localhost:${PORT}`);
});
