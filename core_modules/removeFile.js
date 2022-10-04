const fs = require("fs");

fs.unlink("arquivoErro.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("arquivo removido");
});
