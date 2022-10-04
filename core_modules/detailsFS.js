const fs = require("fs");

fs.stat("arquivo.txt", (erro, stats) => {
  if (erro) {
    console.log(erro);
    return;
  }
  console.log(stats.isFile());
  console.log(stats.isDirectory());
  console.log(stats.isSymbolicLink());
  console.log(stats.size());
  console.log(stats.ctime());
  console.log(stats.isSocket());
});
