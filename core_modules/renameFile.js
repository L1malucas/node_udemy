const fs = require("fs");

fs.rename("arquivo.txt", "arquivorenomeado.txt", (erro) => {
  if (erro) {
    console.log(erro);
    return;
  }
  console.log("arquivo renomeado");
});
