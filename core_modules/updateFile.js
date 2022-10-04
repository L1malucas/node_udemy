const http = require("http");
const fs = require("fs");

const PORT = 3000;
const server = http.createServer((req, res) => {
  let urlInfo = require("url").parse(req.url, true);
  const name = urlInfo.query.name;
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  if (!name) {
    fs.readFile("/html/form.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  } else {
    const nameNewLine = name + "\r\n";

    fs.appendFile("arquivo.txt", nameNewLine, function (err, data) {
      res.writeHead(302, {
        Location: "/",
      });
      return res.end();
    });
  }
});

server.listen(PORT, () => {
  console.log(`servidor rondando na porta http://localhost:${PORT}`);
});
