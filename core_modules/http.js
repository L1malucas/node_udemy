const http = require("http");

const PORT = 3000;
const server = http.createServer((req, res) => {
  res.write("oi http");
  res.end();
});

server.listen(PORT, () => {
  console.log(`servidor rondano na porta http://localhost:${PORT}`);
});
