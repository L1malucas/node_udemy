const os = require("os");
console.log("cpus ");
console.log(os.cpus());
console.log("memoria livre " + os.freemem());
console.log("tipo de so " + os.type());
console.log("memoria total " + os.totalmem());
console.log("diretrio temp " + os.tmpdir());
console.log("diretorio home " + os.homedir());
