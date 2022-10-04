const path = require("path");

function pathOpcoes() {
  const customPath = "../arquivo.txt";
  console.log(path.dirname(customPath));
  console.log(path.basename(customPath));
  console.log(path.extname(customPath));

  // path absoluto
  console.log(path.resolve(customPath));

  //formar path com join()
  const midFolder = "relatorios";
  const fileName = "arquivo.txt";

  const finalPath = path.join("/", "arquivos", midFolder, fileName);

  console.log(finalPath);
}
pathOpcoes();
