const http = require("http");
const fs = require("fs");

const PORT = 3000;
const server = http.createServer((_req, res) => {
  fs.readFile("/html/fs.html", (_err, data) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
});

server.listen(PORT, () => {
  console.log(`servidor rondano na porta http://localhost:${PORT}`);
});
